const axios = require('axios');
const { mapToString } = require('../mapToString/mapToString');

const getData = async () => {

  try {

    const response = await axios.get('http://jsonplaceholder.typicode.com/users')

    const userIds = response.data.map(user => user.id)

    return mapToString(userIds);


  } catch (error) {

    throw new Error(error.message)

  }

}

module.exports = { getData }
