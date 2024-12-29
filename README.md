# React.js ile To Do App

Bu proje, klasik bir ToDo (Yapılacaklar Listesi) uygulamasıdır. Frontend geliştirme için **React.js**, backend simülasyonu için **JSON Server** kullanılmıştır. Uygulama, modern React pratiklerini ve Context API ile merkezi state yönetimini içermektedir.

## Projenin Amacı
Kullanıcıların görev yönetimini kolaylaştırmak için geliştirilmiş bir uygulamadır. Temel işlevler şunlardır:
- Görev oluşturma
- Görev listeleme
- Görev düzenleme
- Görev silme

## Kullanılan Teknolojiler
- **React.js**: Frontend geliştirme için kullanılan JavaScript kütüphanesi
- **Context API**: Global state yönetimi
- **Axios**: HTTP istekleri yönetimi
- **JSON Server**: Fake REST API olarak kullanılan backend simülasyonu
- **CSS**: Responsive arayüz tasarımı

### Teknik Detaylar
- **State Yönetimi**:
  - Context API kullanılarak merkezi state yönetimi sağlanmıştır.
  - **TasksContext** ile CRUD operasyonları ve görev listesi yönetimi yapılmaktadır.
- **API İletişimi**:
  - Axios ile HTTP istekleri yönetilir.
  - CRUD işlemleri için REST API endpoints kullanılmıştır.
- **Komponent Yapısı**:
  - **TaskCreate**: Görev oluşturma ve düzenleme formu.
  - **TaskList**: Görevlerin listelendiği ana komponent.
  - **TaskShow**: Her bir görevin detaylarını gösteren komponent.
- **Responsive Tasarım**:
  - CSS ile tüm ekran boyutlarına uyumlu bir arayüz tasarlanmıştır.


