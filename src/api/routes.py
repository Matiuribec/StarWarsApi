"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User
from api.utils import generate_sitemap, APIException

api = Blueprint('api', __name__)


@api.route('/hello', methods=['POST', 'GET'])
def handle_hello():

    response_body = {
        "message": "Hello! I'm a message that came from the backend, check the network tab on the google inspector and you will see the GET request"
    }

    return jsonify(response_body), 200

@api.route('/users', methods=['GET'])
def get_Ulist():
    users=Users.query.all()
    return list(map(lambda item: item.serialize(),users)), 200

@api.route('/characters', methods=['GET'])
def get_Clist():
    characters = Characters.query.all()
    return list(map(lambda item: item.serialize(),characters)), 200

@api.route('/characters/int:character_param>', methods=['GET'])
def get_Cdetails(character_param):
    character = Characters.query.filter(Characters.id==character_param).all()
    return list(map(lambda item: item.serialize(),character)), 200

@api.route('/planets', methods=['GET'])
def get_Plist():
    planets=Planets.query.all()
    return list(map(lambda item: item.serialize(),planets)), 200

@api.route('/planets/<int:planet_param>', methods=['GET'])
def get_Pdetails(planets_param):
    planet=Planets.query.filter(Planets_id==planets_param).all()
    return list(map(lambda item: item.serialize(),planet)), 200

@api.route('/favorites/<int:user_param>', methods=['GET'])

def get_user_favorite(user_param):
    user_favorites=Favorites.query.filter(Favorites.user_id==user_param)
    favorite_list=[]
    favorites_len=len(user_favorites)
    for i in range(favorites_len):
        favorite_item=user_favorites[i].serialize()
        if (user_favorites[i].favorite_type=="planets"):
            favorite_planets=Planets.query.get(user_favorites[i].favorite_id)
            favorite_item["data"] =favorite_planets.serialize
        if (user_favorites[i].favorite_type=="characters"):
            favorite_character=Characters.query.get(user_favorites[i].favorite_id)
            favorite_item["data"]=favorite_character.serialize

        favorite_list.append(favorite_item)
    return jsonify(favorite_list)

@api.route('/favorites/planet/<int:user_param>', methods=['POST'])

def post_planet_favorite(planet_id, user_id):
    fav_planet= Planets(planet_id=planets_id, user_id = user_id)
    db.session.add(fav_planet)
    db.session.commit()

    return jsonify({"msg":"Agregado con exito"}), 201


@api.route('/favorites/characters/<int:user_param>', methods=['POST'])

def post_character_favorite(character_id, user_id):
    fav_character= Planets(character_id=characters_id, user_id = user_id)
    db.session.add(fav_character)
    db.session.commit()

    return jsonify({"msg":"Agregado con exito"}), 201

@api.route('/favorites/planet/<int:user_param>', methods=['DELETE'])

def delete_planet(planet_id):
    del_planet= Planets.query.filter(Planets.id== planet_id).delete()
    db.session.commit

    return jsonify({'msg':"Favorite Deleted"}), 200

@api.route('/favorites/characters/<int:user_param>', methods=['DELETE'])

def delete_characters(character_id):
    del_character= Characters.query.filter(Characters.id== character_id).delete()
    db.session.commit

    return jsonify({'msg':"Favorite Deleted"}), 200
    
