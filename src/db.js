import Sequelize from 'sequelize';

const Conn = new Sequelize('postgresql://green:green@graphqltestdb/graphqldb')

Conn
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

const Comment = Conn.define('comment', {
  content: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

// Conn.sync({ force: true });

export default Conn;