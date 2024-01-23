// seeders/20240119183000-cbt-soal.js

'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('cbt_soal', [
      { soal_id: 53, soal_topik_id: 7, soal_detail: 'Apakah kepanjangan dari SMK ?', soal_tipe: 1, soal_kunci: null, soal_difficulty: 1, soal_aktif: 1, soal_audio: null, soal_audio_play: 1, soal_timer: null, soal_inline_answers: 0, soal_auto_next: 0 },
      { soal_id: 54, soal_topik_id: 7, soal_detail: '<p>Nama salah satu Mall yang ada di kota genteng adalah ...<br></p>', soal_tipe: 1, soal_kunci: null, soal_difficulty: 1, soal_aktif: 1, soal_audio: null, soal_audio_play: 1, soal_timer: null, soal_inline_answers: 0, soal_auto_next: 0 },
      { soal_id: 55, soal_topik_id: 7, soal_detail: '<p>Siapakah nama tokoh berikut ?</p><p><img src="[base_url]uploads/topik_7/soekarno.jpg" style="max-width: 600px;"><br></p>', soal_tipe: 1, soal_kunci: null, soal_difficulty: 1, soal_aktif: 1, soal_audio: null, soal_audio_play: 1, soal_timer: null, soal_inline_answers: 0, soal_auto_next: 0 },
      { soal_id: 56, soal_topik_id: 7, soal_detail: '<p>Siapakah vokalis band NOAH ?<br></p>', soal_tipe: 1, soal_kunci: null, soal_difficulty: 1, soal_aktif: 1, soal_audio: null, soal_audio_play: 1, soal_timer: null, soal_inline_answers: 0, soal_auto_next: 0 },
      { soal_id: 57, soal_topik_id: 7, soal_detail: '<p>Tanggal berapakah hari raya Idul Fitri ?</p>\r\n', soal_tipe: 1, soal_kunci: null, soal_difficulty: 1, soal_aktif: 1, soal_audio: null, soal_audio_play: 1, soal_timer: null, soal_inline_answers: 0, soal_auto_next: 0 },
      { soal_id: 61, soal_topik_id: 7, soal_detail: 'Jelaskan apa yang dimaksud dengan Jomblo ?', soal_tipe: 2, soal_kunci: null, soal_difficulty: 1, soal_aktif: 1, soal_audio: null, soal_audio_play: 1, soal_timer: null, soal_inline_answers: 0, soal_auto_next: 0 },
      { soal_id: 62, soal_topik_id: 7, soal_detail: '<p>PT. Tiar Perkasa ingin melebarkan sayap usaha di bidang kuliner.</p><p>Dari pernyataan tersebut, sebutkan siapa kekasih mas Tiar ?</p>', soal_tipe: 2, soal_kunci: null, soal_difficulty: 1, soal_aktif: 1, soal_audio: null, soal_audio_play: 1, soal_timer: null, soal_inline_answers: 0, soal_auto_next: 0 },
      { soal_id: 63, soal_topik_id: 7, soal_detail: '<p>Jelaskan kenapa Liverpool FC susah sekali untuk juara Premiere Leage !</p>\r\n', soal_tipe: 2, soal_kunci: null, soal_difficulty: 1, soal_aktif: 1, soal_audio: null, soal_audio_play: 1, soal_timer: null, soal_inline_answers: 0, soal_auto_next: 0 },
      { soal_id: 64, soal_topik_id: 7, soal_detail: '<p>Apakah judul lagu berikut ini?</p>', soal_tipe: 1, soal_kunci: null, soal_difficulty: 1, soal_aktif: 1, soal_audio: 'naff_-_akhirnya_ku_menemukanmu.mp3', soal_audio_play: 1, soal_timer: null, soal_inline_answers: 0, soal_auto_next: 0 },
      { soal_id: 161, soal_topik_id: 7, soal_detail: '<p>Jelaskan arti poster dibawah ini ?</p>\r\n\r\n<p><img src="[base_url]uploads/topik_7/5a49b252e7aea.jpeg" style="height:283px; width:300px" /></p>\r\n', soal_tipe: 1, soal_kunci: null, soal_difficulty: 1, soal_aktif: 1, soal_audio: null, soal_audio_play: 0, soal_timer: null, soal_inline_answers: 0, soal_auto_next: 0 },
      { soal_id: 214, soal_topik_id: 7, soal_detail: '<p>Berapakah 5x10 ?</p>\r\n', soal_tipe: 3, soal_kunci: '50', soal_difficulty: 1, soal_aktif: 1, soal_audio: null, soal_audio_play: 0, soal_timer: null, soal_inline_answers: 0, soal_auto_next: 0 },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('cbt_soal', null, {});
  }
};
