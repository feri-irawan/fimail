# 📧 Fimail

![Visitor](https://fibadge.vercel.app/badges/visitors/feri-irawan/fimail)
![GitHub deployments](https://img.shields.io/github/deployments/feri-irawan/fimail/production?label=vercel&logo=vercel&style=for-the-badge)

Fimail, layanan pengirim pesan elektronik dengan API. Dibuat dengan ❤ dan NodeJs oleh [Feri Irawan](https://github.com/feri-irawan) pada 31/12/2021 06.27

## ⚡ Memulai Cepat

Berikut ini contoh sederhana permintaan API untuk memulai cepat.

```bash
curl -X POST 'https://fimail.vercel.app/send' \
-H 'Content-Type: application/json' \
-d '{
    "from": {
        "name": "<YOUR NAME>",
        "address": "<YOUR EMAIL>"
    },
    "to": {
        "name": "<RECEPTION NAME>",
        "address": "<RECEPTION EMAIL>"
    },
    "subject": "Fimail - Simple Mail",
    "contents": "Lorem ipsum dolor sit amet consectetur adipisicing elit."
}'
```

## 👥 Multi Pengguna

Jika kamu ingin mengirim ke beberapa pengguna, kamu bisa menuliskan email pengguna-pengguna dalam bentuk *array*.

**Contoh:**

```bash
curl -X POST 'https://fimail.vercel.app/send' \
-H 'Content-Type: application/json' \
-d '{
    "from": {
        "name": "<YOUR NAME>",
        "address": "<YOUR EMAIL>"
    },
    "to": [
        {
            "name": "<RECEPTION NAME 1>",
            "address": "<RECEPTION EMAIL 1>"
        },
        {
            "name": "<RECEPTION NAME 2>",
            "address": "<RECEPTION EMAIL 2>"
        },
        {
            "name": "<RECEPTION NAME 3>",
            "address": "<RECEPTION EMAIL 3>"
        },
    ],
    "subject": "Fimail - Multiple Receptions",
    "contents": "Lorem ipsum dolor sit amet consectetur adipisicing elit."
}'
```

Informasi pengirim dan penerima (`to`, `cc`, `bc`, dan `bcc`) juga boleh ditulis seperti ini:

```jsonc
{
    "from": "\"My Name\" <myemail@gmail.com>",
    "to": "\"Reception 1\" <reception1@gmail.com>,\"Reception 2\" <reception2@gmail.com>,\"Reception 3\" <reception3@gmail.com>",
    
    // Or

    "from": "myemail@gmail.com",
    "to": "reception1@gmail.com,reception2@gmail.com,reception3@gmail.com"
}
```

## 👩🏻‍💻 Konten HTML

Secara default pesan yang dikirim sudah dalam format HTML, jadi kamu ingin mengirim konten berupa kode HTML, maka kamu bisa langsung menuliskannya seperti berikut.

```bash
curl -X POST 'https://fimail.vercel.app/send' \
-H 'Content-Type: application/json' \
-d '{
    "from": {
        "name": "<YOUR NAME>",
        "address": "<YOUR EMAIL>"
    },
    "to": {
        "name": "<RECEPTION NAME>",
        "address": "<RECEPTION EMAIL>"
    },
    "subject": "Fimail - HTML Mail",
    "contents": "<b>Lorem ipsum dolor sit amet consectetur adipisicing elit.</b>"
}'
```

## 📎 Dengan Lampiran

Kamu juga bisa mengirim lampiran seperti file, gambar dengan cara menambahkan properti `attachments` pada body.

### 🌐 Menggunakan URL atau URI Base64

Kamu bisa mengirimkan lampiran yang kontenya diambil dari URL atau base64, seperti berikut.

**Contoh 1 - Menggunakan URL:**

```bash
curl -X POST 'https://fimail.vercel.app/send' \
-H 'Content-Type: application/json' \
-d '{
    "from": {
        "name": "<YOUR NAME>",
        "address": "<YOUR EMAIL>"
    },
    "to": {
        "name": "<RECEPTION NAME>",
        "address": "<RECEPTION EMAIL>"
    },
    "subject": "Fimail - With Attachments",
    "contents": "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    "attachments: {
        "filename": "myimage.jpg",
        "path": "https://dummyimage.com/400x400/00ffbf/000000.jpg"
    }
}'
```

**Contoh 2 - Menggunakan URI Base64:**

```bash
curl -X POST 'https://fimail.vercel.app/send' \
-H 'Content-Type: application/json' \
-d '{
    "from": {
        "name": "<YOUR NAME>",
        "address": "<YOUR EMAIL>"
    },
    "to": {
        "name": "<RECEPTION NAME>",
        "address": "<RECEPTION EMAIL>"
    },
    "subject": "Fimail - With Attachments",
    "contents": "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    "attachments: {
        "filename": "myimage.jpg",
        "path": "data:text/plain;base64,aGVsbG8gd29ybGQ="
    }
}'
```

### 👩🏻‍💻 Menggunakan String, Buffer, Stream

Kamu juga bisa mengirimkan lampiran yang kontennya berupa *string*, *buffer*, atau *stream*.

**Contoh:**

```bash
curl -X POST 'https://fimail.vercel.app/send' \
-H 'Content-Type: application/json' \
-d '{
    "from": {
        "name": "<YOUR NAME>",
        "address": "<YOUR EMAIL>"
    },
    "to": {
        "name": "<RECEPTION NAME>",
        "address": "<RECEPTION EMAIL>"
    },
    "subject": "Fimail - With Attachments",
    "contents": "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    "attachments: {
        "filename": "mytext.txt",
        "content": "<STRING or BUFFER or STREAM>"
    }
}'
```

Jika kontennya diambil dari ***buffer*** atau ***stream*** maka, kamu bisa melukan hal yang sama seperti contoh di atas ini.

### 🖇 Multi Lampiran

Kamu juga bisa mengirim beberapa lampiran dengan cara menyusunnya ke dalam bentuk *array* seperti berikut ini.

```bash
curl -X POST 'https://fimail.vercel.app/send' \
-H 'Content-Type: application/json' \
-d '{
    "from": {
        "name": "<YOUR NAME>",
        "address": "<YOUR EMAIL>"
    },
    "to": {
        "name": "<RECEPTION NAME>",
        "address": "<RECEPTION EMAIL>"
    },
    "subject": "Fimail - With Attachments",
    "contents": "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    "attachments: [
        {
            "filename": "myimage.jpg",
            "path": "https://dummyimage.com/400x400/00ffbf/000000.jpg"
        },
        {
            "filename": "myimage2.jpg",
            "path": "https://dummyimage.com/400x400/ffd000/000000.jpg"
        },
        {
            "filename": "mytext.txt",
            "content": "Hello World!"
        }
    ]
}'
```

Nah, seperti itulah cara melakukan permintaan API ke Fimail untuk mengirim email.

Semoga bermanfaat, terima kasih.
