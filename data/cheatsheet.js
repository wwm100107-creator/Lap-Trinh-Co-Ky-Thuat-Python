/**
 * CHEATSHEET TRA CỨU NHANH CÚ PHÁP & CÔNG THỨC KỸ THUẬT
 * Môn: Lập trình Cơ Kỹ Thuật - ĐH Bách Khoa TP.HCM
 */

window.CHEATSHEET_DATA = [
  {
    category: "Cơ sở Python & Định dạng kỹ thuật",
    items: [
      { name: "f-string định dạng số thực", code: "f'x = {x:.4f} m, P = {P:.2e} N'", desc: "Định dạng số thực với 4 chữ số thập phân hoặc ký hiệu khoa học." },
      { name: "Slicing danh sách", code: "arr[start:stop:step]\narr[::-1]  # Đảo ngược danh sách", desc: "Cắt lát danh sách tọa độ, tải trọng hoặc chuỗi ký tự." },
      { name: "So sánh số thực an toàn", code: "import math\nmath.isclose(a, b, abs_tol=1e-7)", desc: "Tránh cạm bẫy sai số nhị phân IEEE 754 trong máy tính." },
      { name: "Bắt lỗi nhập liệu", code: "try:\n    val = float(input())\nexcept ValueError:\n    print('Lỗi nhập số')", desc: "Đảm bảo chương trình không bị crash khi nhập sai định dạng." }
    ]
  },
  {
    category: "NumPy - Ma trận & Đại số tuyến tính",
    items: [
      { name: "Khởi tạo mảng / Vector", code: "x = np.arange(0, 10, 0.2)\nt = np.linspace(0, 2*np.pi, 100)", desc: "arange theo bước nhảy, linspace theo tổng số điểm chia." },
      { name: "Nhân ma trận", code: "C = A @ B  # hoặc np.dot(A, B)", desc: "Nhân ma trận theo chuẩn đại số tuyến tính (khác với A * B là nhân từng phần tử)." },
      { name: "Giải hệ phương trình Ax = B", code: "x = np.linalg.solve(A, B)", desc: "Phương pháp chuẩn giải hệ phương trình cân bằng kết cấu bằng phân rã LU." },
      { name: "Nghịch đảo & Định thức", code: "A_inv = np.linalg.inv(A)\ndet = np.linalg.det(A)", desc: "Kiểm tra tính suy biến (det == 0) và tính ma trận nghịch đảo." },
      { name: "Trị riêng & Vector riêng", code: "eigenvals, eigenvecs = np.linalg.eig(K)", desc: "Bài toán tần số dao động riêng và dạng dao động của kết cấu dầm/khung." }
    ]
  },
  {
    category: "Matplotlib - Đồ thị kỹ thuật",
    items: [
      { name: "Vẽ đường cơ bản", code: "plt.plot(x, y, color='b', linestyle='--', marker='o', label='Mô men')", desc: "Tùy biến đầy đủ màu, nét đứt, marker và chú thích." },
      { name: "Lưới đa khung (Subplot)", code: "plt.subplot(rows, cols, index)\n# vd: plt.subplot(2, 2, 1)", desc: "Chia cửa sổ đồ thị thành lưới nhiều khung hình độc lập." },
      { name: "Công thức toán LaTeX", code: "plt.title(r'$q(x) = 2x^2 - 5x + 3\\text{ (kN/m)}$')", desc: "Ký tự 'r' phía trước giúp hiển thị đúng công thức toán Hy Lạp." },
      { name: "Định dạng trục & Lưới", code: "plt.grid(True, linestyle=':')\nplt.axis('equal')  # Tỉ lệ 1:1 cho hình học", desc: "Giữ tỷ lệ trục thực tế khi vẽ tam giác, đường tròn hoặc mặt cắt dầm." }
    ]
  },
  {
    category: "Tkinter - Lập trình Giao diện",
    items: [
      { name: "Khung cửa sổ chuẩn", code: "root = tk.Tk()\nroot.title('Tên App')\nroot.geometry('400x300')\nroot.mainloop()", desc: "Cấu trúc cơ bản nhất của một ứng dụng GUI." },
      { name: "Bố trí lưới Grid", code: "widget.grid(row=0, column=1, padx=5, pady=5, sticky='w')", desc: "Quản lý vị trí hàng, cột và khoảng cách đệm chuyên nghiệp." },
      { name: "Đồng bộ biến động", code: "var = tk.StringVar(value='0.0')\nlbl = tk.Label(root, textvariable=var)\nvar.set('Kết quả mới')", desc: "Tự động cập nhật giao diện khi giá trị biến tính toán thay đổi." },
      { name: "Hộp thoại thông báo", code: "from tkinter import messagebox\nmessagebox.showerror('Lỗi', 'Thông báo lỗi')", desc: "Hiển thị popup cảnh báo lỗi nhập liệu cho người dùng." }
    ]
  },
  {
    category: "Công thức Cơ Kỹ Thuật thường dùng",
    items: [
      { name: "Khoảng cách 2 điểm Oxy", code: "d = math.hypot(x2 - x1, y2 - y1)", desc: "Độ dài đoạn thẳng / thanh giàn 2D." },
      { name: "Diện tích Shoelace (Gauss)", code: "0.5 * abs(sum(x[i]*y[i+1] - x[i+1]*y[i]))", desc: "Tính diện tích đa giác bất kỳ (tam giác, tứ giác, đa giác n cạnh)." },
      { name: "Diện tích tam giác Heron", code: "p = (a+b+c)/2; s = math.sqrt(p*(p-a)*(p-b)*(p-c))", desc: "Tính diện tích khi chỉ biết độ dài 3 cạnh." },
      { name: "Phản lực dầm đơn giản", code: "RA = P * (L - a) / L; RB = P * a / L", desc: "Tải trọng tập trung P đặt tại khoảng cách a từ gối trái A." }
    ]
  }
];
