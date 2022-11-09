# KS04-kelompok4-finalProject2

1. npm run prepareDB untuk menyiapkan database


- [x] Project dikerjakan menggunakan ORM Sequelize dengan database Postgresql
    
- [x] Library package yang peru diinstal
    
    - [x] jsonwebtoken
    - [x] bcrypt
    - [x] dotenv
    - [x] express
    - [x] sequelize
    - [x] sequelize-cli
- [x] Memerlukan 4 tabel
    
    - [x] User
        1\. id (Primary key)
        2\. full_name(String/varchar)
        3\. email (String/varchar)
        4\. password(String/varchar)
        5\. profile\_image\_url(Text)
        6\. age (number/integer)
        7\. phone_number(number/integer)
        8\. createdAt(Date)
        9\. updatedAt(Date)
        
    - [x] Photo
        1\. id (Primary key)
        2\. title (String/varchar)
        3\. caption (text)
        4\. poster\_image\_url (text)
        5\. UserId (Foreign Key Of User Table)
        6\. createdAt(Date)
        7\. updatedAt(Date)
        
    - [x] Comment
        1\. id (Primary key)
        2\. UserId (Foreign Key Of User Table)
        3\. PhotoId (Foreign key of Photo tabel)
        4\. comment (text)
        5\. createdAt (Date)
        6\. updatedAt (Date)
        
    - [x] Social Media
        1\. id (primary key)
        2\. name (String/varchar)
        3\. social\_media\_url (String/Text)
        4\. UserId (foreign key of User table)
        
- [ ] Keempat tabel mempunyai validasi-validasi pada tiap fieldnya.
    
    - [ ] tabel User
        1\. Field email
        3\. Field full_name
        4\. Field username
        5\. Field password
        6\. Field profile\_image\_url
        7\. Field age
        8\. Field phone_number
    - [ ] tabel Photo
        1\. Field title
        2\. Field caption
        3\. Field poster\_image\_url
    - [ ] tabel SocialMedia
        1\. Field name
        2\. Field social\_media\_url
    - [ ] tabel Comment
        1\. Field Comment

- [ ] Item daftarAlur dari aplikasi 
	- [ ] Setiap table mempunyai endpoint untuk proses Create, Read, Update, Delete
	- [ ] Endpoint untuk mengakses data pada table SocialMedia, Photos, dan Comment harus melalui proses autentikasi terlebih dahulu, dan proses autentikasinya wajib menggunakan JsonWebToken
	- [ ] Untuk endpoint yang berguna memodifikasi data seperti Update dan Delete harus melalui proses autorisasi
