const { Member } = require('../models/memberModel.js');
const { Logs } = require('../models/logsModel.js');

const memberController = {
  /**
       * CREATE (MEMBER)
       * READ (PARAMETER)
       * UPDATE (PARAMETER, MEMBER)
       * DELETE (MEMBER)
       */
  createMember: async (req, res) => {
    try {
      const { firstname, lastname, lcAmount } = req.body;
      
      const newMember = await Member.create({
        firstname,
        lastname,
        lcAmount,
      });

      // Logs tablosuna ekleme işlemi
      await Logs.create({
        user_id: newMember.user_id,
        log_type: 'CREATE',
        amount_changed: lcAmount,
      });

      res.status(201).json(newMember);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Üye oluşturulamadı' });
    }
  },

  readMember: async (req, res) => {
    try {
      const memberId = req.params.user_id; // Üye kimliği parametreden alınır

      // Member modeli kullanarak ilgili üyeyi veritabanından al
      const member = await Member.findByPk(memberId);

      // Üye bulunduysa gönder
      if (member) {
        res.status(200).json(member);
      } else {
        res.status(404).json({ error: 'Üye bulunamadı' });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Üye okunamadı' });
    }
  },

  updateMember: async (req, res) => {
    try {
      const memberId = req.params.user_id;
      const { firstname, lastname, lcAmount } = req.body;

      const [updatedCount] = await Member.update(
        { firstname, lastname, lcAmount },
        { where: { user_id: memberId } }
      );

      if (updatedCount > 0) {
        // Logs tablosuna güncelleme işlemi
        await Logs.create({
          user_id: memberId,
          log_type: 'UPDATE',
          amount_changed: lcAmount ,
        });

        res.status(200).json({ message: 'Üye güncellendi' });
      } else {
        res.status(404).json({ error: 'Üye bulunamadı' });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Üye güncellenemedi' });
    }
  },

  deleteMember: async (req, res) => {
    try {
      const memberId = req.params.user_id;

      const deletedCount = await Member.destroy({ where: { user_id: memberId } });

      if (deletedCount > 0) {
        // Logs tablosuna silme işlemi
        await Logs.create({
          user_id: memberId,
          log_type: 'DELETE',
          amount_changed: 0,
        });

        res.status(200).json({ message: 'Üye silindi' });
      } else {
        res.status(404).json({ error: 'Üye bulunamadı' });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Üye silinemedi' });
    }
  },
  changeMemberBalance: async (req, res) => {
    try {
      const memberId = req.params.user_id;
      const { lcAmount } = req.body;

      const [updatedCount] = await Member.update(
        { lcAmount },
        { where: { user_id: memberId } }
      );

      if (updatedCount > 0) {
        // Logs tablosuna güncelleme işlemi
        if(lcAmount > 0){
          await Logs.create({
          user_id: memberId,
          log_type: 'AddMoney',
          amount_changed: lcAmount,
        });

        }
        if(lcAmount <= 0){
          await Logs.create({
            user_id: memberId,
            log_type: 'SpendMoney',
            amount_changed: lcAmount,
          });
        }

        res.status(200).json({ message: 'Üye güncellendi. ' });
      } else {
        res.status(404).json({ error: 'Üye bulunamadı' });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Üye güncellenemedi' });
    }
  },

};

module.exports = memberController;
