//importar a dependencia do sqlite 3
const sqlite3 = require("sqlite3").verbose()

//Criar o objeto que irá fazer operações no banco de dados

const db = new sqlite3.Database("./src/database/database.db")

//Utilizar o objeto de banco de dados, para nossas operações

module.exports = db
/*
db.serialize(() => {

   /* //Com comandos SQL eu vou:
    //criar uma tabela

    db.run(`
        create table if not exists places (
            id integer primary key autoincrement,
            image text,
            name text,
            address text,
            address2 text,
            state text,
            city text,
            items text
        );
    `)

    //Inserir Dados na tabela

            const query =    `
            insert into places (
                image,
                name,
                address,
                address2,
                state,
                city,
                items
            ) values ( ?,?,?,?,?,?,?);
             `
            const values = [
                "https://images.unsplash.com/photo-1528323273322-d81458248d40?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=801&q=80",
                "Papersider",
                "Guilherme Gemballa, Jardim América",
                "Número 260",
                "Santa Catarina",
                "Rio do Sul",
                "Papéis e Papelão"
            ]    
            function afterInsertData(err){
                if(err){
                    return console.log(err)
                }
                console.log("Cadastrado com sucesso")
                console.log(this)

            }
            db.run(query, values, afterInsertData)
                
        })             

    //Consultar os dados na tabela

    db.all("select * from places", function(err, row){
        if(err){
            return console.log(err)
        }

        console.log('Aqui estão seus registros')
        console.log(rows)
    })

    //deletar um dado da tabela

    db.run(`DELETE FROM places WHERE id = ?`, [1], function(err){
        if(err){
            return console.log(err)
        }
        console.log("Registro deletado com sucesso")
        
    })*/


