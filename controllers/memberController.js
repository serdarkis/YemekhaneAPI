const { Member } = require('../models/memberModel.js');


const memberController = {
  /**
       * CREATE (MEMBER)
       * READ (PARAMETER)
       * UPDATE (PARAMETER, MEMBER)
       * DELETE (MEMBER)
       */
  createMember: async (req, res) => {
    try {
      // Yeni üye bilgilerini al
      const { firstName, lastName, balance } = req.body;
      
      const newMember = await Member.create({
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
      const memberId = req.params.user_id; // Güncellenecek üyenin kimliği

      // Güncellenecek bilgileri al
      const { firstName, lastName, balance } = req.body;

      // Member modeli kullanarak ilgili üyeyi güncelle
      const updatedMember = await Member.update(
        { firstName, lastName, balance },
        { where: { user_id: memberId } }
      );

      if (updatedMember[0]) {
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
      const memberId = req.params.user_id; // Silinecek üyenin kimliği

      // Member modeli kullanarak ilgili üyeyi sil
      const deletedMemberCount = await Member.destroy({ where: { user_id: memberId } });

      if (deletedMemberCount) {
        res.status(200).json({ message: 'Üye silindi' });
      } else {
        res.status(404).json({ error: 'Üye bulunamadı' });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Üye silinemedi' });
    }
  },

};

module.exports = memberController;
