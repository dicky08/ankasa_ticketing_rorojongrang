const db = require('../config/database')

const facilities = {
  getAll: (search, sort, type, limit, offset) => {
    return new Promise((resolve, reject) => {
      db.query(
        `SELECT *, (SELECT COUNT(*) FROM facilities) AS count, facilities.id_facilities as id_facilities
            FROM facilities WHERE name_facilities LIKE '%${search}%' ORDER BY ${sort} ${type} LIMIT ${offset}, ${limit}`,
        (err, result) => {
          if (err) {
            reject(new Error(err));
          } else {
            resolve(result);
          }
        }
      );
    });
  },
  gettAllData: () => {
    return new Promise((resolve, reject) => {
      db.query(`SELECT *  FROM facilities`, (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      });
    });
  },
  getDetail: (id) => {
    return new Promise((resolve, reject) => {
      db.query(
        `SELECT * FROM facilities WHERE id_facilities= '${id}'`,
        (err, result) => {
          if (err) {
            reject(new Error(err));
          } else {
            resolve(result);
          }
        }
      );
    });
  },
  insert: (data) => {
    return new Promise((resolve, reject) => {
      db.query(
        `INSERT INTO facilities (name_facilities) VALUES ('${data.name_facilities}')`,
        (err, result) => {
          if (err) {
            reject(new Error(err.message));
          } else {
            resolve(result);
          }
        }
      );
    });
  },
  update: (data, id) => {
    return new Promise((resolve, reject) => {
      db.query(
        `UPDATE facilities SET ? WHERE id_facilities = ?`,
        [data, id],
        (err, result) => {
          if (err) {
            reject(new Error(err.message));
          } else {
            resolve(result);
          }
        }
      );
    });
  },
  updateAdmin: (name_facilities, id) => {
    return new Promise((resolve, reject) => {
      db.query(
        `UPDATE facilities SET name_facilities ='${name_facilities}' WHERE id_facilities = '${id}'`, (err, result) => {
            if(err) {
                reject(err)
            } else {
                resolve(result)
            }
        }
      );
    });
  },
  destroy: (id) => {
    return new Promise((resolve, reject) => {
      db.query(
        `DELETE FROM facilities WHERE id_facilities='${id}'`,
        (err, result) => {
          if (err) {
            reject(new Error(err.message));
          } else {
            resolve(result);
          }
        }
      );
    });
  },
};

module.exports = facilities