from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class Users(db.Model):
    __tablename__ = "user"
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(80), unique=False, nullable=False)
    is_active = db.Column(db.Boolean(), unique=False, nullable=False)

    def __repr__(self):
        return f'<User {self.email}>'

    def serialize(self):
        return {
            "id": self.id,
            "email": self.email,
            # do not serialize the password, its a security breach
        }

class Planets(db.Model):
    __tablename__ = "planets"
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String, nullable=False)
    user_id=db.Column(db.Integer, db.ForeignKey("user.id"))
    user=db.relationship(Users)
    def __repr__(self):
        return f'<Planets {self.id}>'

    def serialize(self):
        return {
            "id": self.id,
            "name": self.name,
            
            # do not serialize the password, its a security breach
        }


class Characters(db.Model):
    __tablename__ = "characters"
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String, unique=False, nullable=False)
    user_id=db.Column(db.Integer, db.ForeignKey("user.id"))
    user=db.relationship(Users)
    
    def __repr__(self):
        return f'<Characters {self.id}>'

    def serialize(self):
        return {
            "id": self.id,
            "name": self.name,
            # do not serialize the password, its a security breach
        }
    
class Favorites(db.Model):
    __tablename__ = "favorites"
    id = db.Column(db.Integer, primary_key=True)
    user_id= db.Column(db.Integer, db.ForeignKey("user.id"))
    user = db.relationship(User)
    favorite_id= db.Column(db.Integer, nullable=False)
    favorite_type = db.Column(db.String, nullable=False)

    def __repr__(self):
        return f'<Favorites {self.id}>'

    def serialize(self):
        return {
            "id": self.id,
            "favorite_id": self.favorite_id,
            "user_id": self.user_id,
            "type": self.favorite_type

            # do not serialize the password, its a security breach
        }


# class Fav_characters(db.Model):
#     id = db.Column(db.Integer, primary_key=True)
#     user_id= db.Column(db.Integer, db.ForeignKey("user.id"))
#     user = db.relationship(User)
#     characters_id= db.Column(db.Integer, db.ForeignKey("planets.id"))
#     characters = db.relationship(Characters)

#     def __repr__(self):
#         return f'<Fav_characters {self.id}>'

#     def serialize(self):
#         return {
#             "characters_id": self.characters_id,
#             "user_id": self.user_id,
#             # do not serialize the password, its a security breach
#         }
