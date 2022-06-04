# Criar uma API REST com Python, que fará um cadastro de cliente e que tenha
# as seguintes características:
# suporte GET, POST, UPDATE, DELETE [ok]
# gere Logs com nível 1, 2, 3, 4, 5
# suporte banco de dados NoSQL
# tenha documentação declarada através de um endpoint

#início

# Libs
import logging
import mysql.connector
from flask import Flask, request, jsonify
from flask_restful import Resource, Api
from sqlalchemy import create_engine
from json import dump


db_connect = create_engine('sqlite:///database.db')
app = Flask(__name__)
api = Api(app)

class Usuarios(Resource): # Classe que representa a tabela usuários
    # Método GET
    def get(self):
        cnt = db_connect.connect()
        query = cnt.execute("select * from usuarios")
        resultado = [dict(zip(tuple(query.keys()), i)) for i in query.cursor]
        return jsonify(resultado)

    # Método POST
    def post(self):
        cnt = db_connect.connect()
        nome = request.json['nome']
        email = request.json['email']

        cnt.execute(
            "insert into usuarios values(null, '{0}', '{1}')".format(nome, email))
        
        query = cnt.execute('select * from usuarios order by id desc limit 1')
        resultado = [dict(zip(tuple(query.keys()), i)) for i in query.cursor]
        return jsonify(resultado)

    # Método UPDATE
    def put(self):
        cnt = db_connect.connect()
        id = request.json['id']
        nome = request.json['nome']
        email = request.json['email']
        cnt.execute(
            "update usuarios set nome = '" + str(nome) + "', email = '" + str(email) + "' where id = %d " % int(id))
        
        query = cnt.execute('select * from usuarios where id = %d' % int(id))
        resultado = [dict(zip(tuple(query.keys()), i)) for i in query.cursor]
        return jsonify(resultado)

class UserById(Resource):
    # Método DELETE
    def delete(self, id):
        cnt = db_connect.connect()
        id = request.json['id']
        cnt.execute("delete from usuarios where id = {0}".format(id))
        return {'status': 'success'}
    # Método GET
    def get(self, id):
        cnt = db_connect.connect()
        query = cnt.execute("select * from usuarios where id = %d" % int(id))
        resultado = [dict(zip(tuple(query.keys()), i)) for i in query.cursor]
        return jsonify(resultado)

api.add_resource(Usuarios, '/usuarios')
api.add_resource(UserById, '/usuarios/<int:id>')

if __name__ == '__main__':
    app.run(debug=True)
