# Instructions:

## Spend the next few minutes with your partner answering the following questions. You should be using the Sequelize Documentation (and whatever other references you find online).

---
###  Question: What is Sequelize?

Answer:
- Sequelize.js is an ORM (Object/Relational Mapper) which provides easy access to MySQL, MariaDB, SQLite or PostgreSQL databases by mapping database entries to objects and vice versa. 
- Squelize is a promise-based ORM for Node.js v4 and up. It supports the dialects PostgreSQL, MySQL, SQLite and MSSQL and features solid transaction support, relations, read replication and more.

### Question: What advantages does it offer?
      - Answer: Good support for database synchronization, eager loading, associations, transactions and migrations; easy to test; has all the characteristics as JavaScript making it easier to understand; manage db connection in code

* Question: How do I install it? How do I incorporate it into my app?
      Answer: Install the following node packages; 
      * Express node package
      * Sequelize node package
      * MySQL (or other connectors to database, like Postgres)
      * Require it in your app

- Question: What the heck is a Sequelize model? What role will it play?
    Answer: Structure for the table; severs as the go-in-between: deal with the model and not the database. 

- Question: Let's say I have the below table in MySQL. 

    | Country     | PhoneCode | Capital   | IndependenceYear |
    |-------------|-----------|-----------|------------------|
    | Afghanistan | 93        | Kabul     | 1919             |
    | Belarus     | 375       | Misk      | 1991             |
    | Netherlands | 31        | Amsterdam | 1648             |
    | Oman        | 968       | Muscat    | 1970             |
    | Zambia      | 260       | Lusaka    | 1964             |

    - How would I model it in Sequelize

    - How would I query for all the records where the Independence Year was less than 50 years ago?
        tableName.findAll({
            where: { IndependenceYear: { $gt: new Date().getFullYear() - 50}
            }
        });

    - How would I query the table, order it by descending Independence Years, and limit the results to just show 2 of the records. Skipping the first two? (i.e. Results: Zambia, Afghanistan)
    tableName.findAll({
        offset: 2,
        limit: 2,
        order:[[sequelize.col('IndpendenceYear'), 'DESC']]
    });

- Bonus: How do I use Sequelize to make changes to an existing table with data in it?
   [Answer is Here](http://docs.sequelizejs.com/en/latest/docs/migrations/)

---