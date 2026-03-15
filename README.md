# Bài tập: Hosting ứng dụng web với Nginx

Thực hiện theo bài thực hành **Nginx Hosting** (phần 6 – Hosting ứng dụng web): [https://itest.com.vn/lects/webappdev/hosting/](https://itest.com.vn/lects/webappdev/hosting/). Bạn cần **tự tạo** cấu trúc thư mục, các file và nội dung theo đúng yêu cầu dưới đây để vượt qua autograding.

## 1. Tạo cấu trúc thư mục và file

Trong repo **không có sẵn** thư mục `sites/` hay `nginx-config/`. Bạn phải tự tạo toàn bộ thư mục và file sau (đường dẫn tính từ **thư mục gốc** của repo). **Tên thư mục và tên file phải chính xác từng chữ** thì autograding mới nhận.

| Đường dẫn file |
|----------------|
| `sites/bulletin.any.com.vn/index.htm` |
| `sites/bulletin.any.com.vn/test.php` |
| `sites/hrm.any.com.vn/index.htm` |
| `sites/hrm.any.com.vn/test.php` |
| `nginx-config/bulletin.any.com.vn.conf` |
| `nginx-config/hrm.any.com.vn.conf` |

Ví dụ: tạo thư mục `sites`, trong đó tạo `bulletin.any.com.vn`, trong đó tạo hai file `index.htm` và `test.php`; tương tự cho `hrm.any.com.vn`; tạo thư mục `nginx-config` với hai file cấu hình như trên.

## 2. Nội dung trang web và Cấu hình Nginx

Bạn có thể tham khảo bài thực hành để viết đúng cú pháp và thứ tự directive.

## Chạy thử autograding

Trên máy local:

```bash
npm install
npm test
```

Nếu tất cả test đều pass, script sẽ thoát với mã 0. Khi bạn push lên GitHub, autograding trên GitHub Classroom sẽ chạy cùng bộ test này.

## Lưu ý

- Chấm điểm chạy trên môi trường GitHub Actions. Bạn chỉ cần nộp đúng file trong repo; không cần cài Nginx/PHP trên máy mình để qua được autograding (có thể tự thực hành cài Nginx/PHP sau).
- Tên file và đường dẫn thư mục phải **đúng từng ký tự**.