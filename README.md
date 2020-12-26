# filterEmailJS

Filter email menggunakan javascript

Live demo : https://alifirhas.github.io/filterEmailJS/

Setiap alamat email terdiri atas nama lokal dan nama domain yang dipisahkan dengan karakter @.
Contohnya, pada email politeknik@polije.ac.id, politeknik adalah nama lokal, dan polije.ac.id
adalah nama domain. Selain huruf kecil, alamat email ini juga bisa mengandung titik (".") atau plus ("+‟).

Fungsi aplikasi ini adalah untuk memfilter email dengan aturan
1. Jika email terdapat tanda titik (".") di antara karater di nama lokal, maka nama lokal akan menjadi nama lokal tanpa titik. contoh poli.teknik menjadi politeknik.
2. Jika email terdapa tanda tambah ("+") di antar karakter di nama lokal, maka nama lokal akan menjadi kata pertama sebelum tanda tambah ("+"). contoh politeknik+belajar menjadi politeknik.
3. Nama domain polije.ac.id tidak sama dengan poli.je.ac.id.
4. Nama domain tidak boleh mengandung tanda tambah ("+"). Jika nama dommain dari email mengandung tanda tambah ("+") maka email akan dinyatakan tidak valid dan akan dihaapus.
3. Email hanya akan ditampilkan yang uniqe. Jadi jika ada dua atau lebih email yang sama setelah aturan 1, 2, 3 dan 4 diterapkan maka email yang sama itu tadi akan dihitung satu email.

