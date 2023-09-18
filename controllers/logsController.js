// controllers/logsController.js
const logsModel = require('../models/logsModel.js');

/**
       * CREATE (MEMBER)
       * READ (PARAMETER)
       * UPDATE (PARAMETER, MEMBER)
       * DELETE (MEMBER)
       */      

/**
 * Github da main branch yaninda
 * develop branch i oluştur
 * yapılanları oraya once commit sonra merge
 * merge lemede kullanılan tag leri öğren 
 * RFR, BUGFIX, DRAFT, FEATURE vs.
 */

const logsController = {
    createLog: async (req, res) => {
        try {
          // Yeni üye bilgilerini al
          const { firstName, lastName, balance } = req.body;
          
          const newMember = await logsModel.Logs.create({
            firstName,
            lastName,
            balance,
          });
          // Üye başarıyla oluşturulduğunda bir yanıt gönder
          res.status(201).json(newMember);
        } catch (error) {
          // Hata durumunda bir hata yanıtı gönder
          console.error(error);
          res.status(500).json({ error: 'Üye oluşturulamadı' });
        }
        
      },
};

module.exports = logsController;
