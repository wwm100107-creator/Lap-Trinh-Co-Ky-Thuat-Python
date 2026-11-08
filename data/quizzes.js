/**
 * BỘ CÂU HỎI TRẮC NGHIỆM ĐÁNH GIÁ ĐỘ HIỂU (HỌC LÀ NHỚ)
 * Môn: Lập trình Cơ Kỹ Thuật - ĐH Bách Khoa TP.HCM
 */

window.QUIZZES_DATA = [
  {
    chapterId: "ch4",
    title: "Trắc nghiệm Chương 4: Cấu trúc điều khiển",
    questions: [
      {
        question: "Biểu thức `0.1 + 0.2 == 0.3` trong Python trả về kết quả gì?",
        options: [
          "True vì toán học 0.1 + 0.2 luôn bằng 0.3",
          "False do sai số biểu diễn nhị phân của số thực theo chuẩn IEEE 754",
          "Lỗi SyntaxError vì không được so sánh số thực",
          "None"
        ],
        answer: 1,
        explain: "Do chuẩn số thực dấu phẩy động IEEE 754, 0.1 + 0.2 thực tế xấp xỉ bằng 0.30000000000000004. Vì vậy trong kỹ thuật, luôn dùng `abs(a - b) < eps` hoặc `math.isclose()`."
      },
      {
        question: "Đoạn code sau in ra kết quả gì?\n```python\nfor i in range(1, 6):\n    if i % 2 == 0:\n        continue\n    print(i, end=' ')\n```",
        options: [
          "1 2 3 4 5",
          "2 4",
          "1 3 5",
          "1 3"
        ],
        answer: 2,
        explain: "Khi i là số chẵn (i % 2 == 0), lệnh `continue` lập tức bỏ qua phần còn lại của thân vòng lặp để nhảy sang bước lặp tiếp theo, do đó chỉ các số lẻ 1, 3, 5 được in."
      },
      {
        question: "Một thanh dầm dài L = 10m cần chia thành các đoạn nhỏ với bước nhảy dx = 0.5m. Lệnh range() nào sau đây KHÔNG THỂ dùng trực tiếp?",
        options: [
          "range(0, 10, 0.5)",
          "np.arange(0, 10 + 0.5, 0.5)",
          "Dùng vòng lặp while x <= 10: x += 0.5",
          "np.linspace(0, 10, 21)"
        ],
        answer: 0,
        explain: "Hàm `range()` tích hợp sẵn của Python CHỈ nhận số nguyên int cho cả start, stop và step. Truyền số thực 0.5 vào range() sẽ ném ra lỗi `TypeError: 'float' object cannot be interpreted as an integer`."
      }
    ]
  },
  {
    chapterId: "ch5",
    title: "Trắc nghiệm Chương 5: Hàm và Module",
    questions: [
      {
        question: "Đoạn code sau xuất ra kết quả gì?\n```python\ndef them_luc(p_list, p=10):\n    p_list.append(p)\n\nloads = [50, 60]\nthem_luc(loads, 70)\nprint(loads)\n```",
        options: [
          "[50, 60]",
          "[50, 60, 70]",
          "[70]",
          "Lỗi UnboundLocalError"
        ],
        answer: 1,
        explain: "List là kiểu dữ liệu khả biến (Mutable). Khi truyền vào hàm theo cơ chế Pass-by-object-reference, phương thức `.append()` sửa trực tiếp lên vùng nhớ của list gốc bên ngoài hàm."
      },
      {
        question: "Trong định nghĩa hàm `def tinh_toan(*args, **kwargs):`, kiểu dữ liệu của `args` và `kwargs` bên trong hàm lần lượt là gì?",
        options: [
          "List và Dictionary",
          "Tuple và Dictionary",
          "Tuple và List",
          "Set và Dictionary"
        ],
        answer: 1,
        explain: "`*args` gom các tham số vị trí không định danh vào một `Tuple` (bất biến), còn `**kwargs` gom các tham số có tên khóa (keyword arguments) vào một `Dictionary`."
      },
      {
        question: "Khối lệnh `if __name__ == '__main__':` trong file module có ý nghĩa gì?",
        options: [
          "Bắt buộc phải có để Python biên dịch file sang mã máy",
          "Chỉ thực thi đoạn code bên trong khi file được chạy trực tiếp, không chạy khi bị import vào file khác",
          "Khởi tạo hàm main() giống như trong C++ hay Java",
          "Kiểm tra xem người dùng có quyền quản trị (Admin) hay không"
        ],
        answer: 1,
        explain: "Khi chạy trực tiếp file bằng `python file.py`, biến `__name__` có giá trị là `'__main__'`. Khi file đó được file khác import, `__name__` sẽ là tên của module, giúp ngăn các đoạn code kiểm thử tự động chạy khi import."
      }
    ]
  },
  {
    chapterId: "ch6",
    title: "Trắc nghiệm Chương 6: Lập trình Hướng đối tượng OOP",
    questions: [
      {
        question: "Tham số `self` đầu tiên trong các phương thức của class đại diện cho điều gì?",
        options: [
          "Đại diện cho chính class cha",
          "Đại diện cho chính đối tượng thể hiện (instance) cụ thể đang gọi phương thức",
          "Là một biến toàn cục (global variable) lưu trữ trạng thái",
          "Tự động trỏ tới hàm khởi tạo __init__"
        ],
        answer: 1,
        explain: "`self` là tham chiếu trỏ tới đối tượng cụ thể (instance) đang thực thi phương thức, cho phép truy cập và thay đổi các thuộc tính riêng `self.x`, `self.y` của đối tượng đó."
      },
      {
        question: "Trong bài toán kế thừa: class Rectangle kế thừa từ class Quadrangle. Lệnh nào sau đây gọi hàm khởi tạo của lớp cha đúng chuẩn nhất?",
        options: [
          "Quadrangle.__init__(self, p1, p2, p3, p4)",
          "super().__init__(p1, p2, p3, p4)",
          "parent.__init__(p1, p2, p3, p4)",
          "Cả A và B đều đúng"
        ],
        answer: 3,
        explain: "Cả A và B đều hoạt động, nhưng cách dùng `super().__init__(...)` (Cách B) là chuẩn mực và hiện đại nhất trong Python 3 vì hỗ trợ tốt đa kế thừa (MRO)."
      }
    ]
  },
  {
    chapterId: "ch7",
    title: "Trắc nghiệm Chương 7: NumPy & Matplotlib",
    questions: [
      {
        question: "Để giải hệ phương trình cân bằng kết cấu [A]{X} = {B}, tại sao nên dùng `np.linalg.solve(A, B)` thay vì `np.linalg.inv(A) @ B`?",
        options: [
          "`solve` sử dụng phân rã LU, nhanh hơn và ít tích lũy sai số làm tròn số thực hơn tính ma trận nghịch đảo",
          "Tính ma trận nghịch đảo `inv(A)` tốn nhiều bộ nhớ RAM hơn",
          "`inv(A)` sẽ báo lỗi nếu ma trận có số chiều lớn hơn 2",
          "Cả A và B đều đúng"
        ],
        answer: 3,
        explain: "Việc tính nghịch đảo tường minh `inv(A)` vừa tốn gấp đôi phép tính vừa gây sai số tích lũy lớn khi ma trận có điều kiện xấu (ill-conditioned). Hàm `solve` dùng thuật toán phân rã LU tối ưu hơn nhiều."
      },
      {
        question: "Lệnh `plt.subplot(3, 2, 5)` trong Matplotlib tạo khung đồ thị nằm ở vị trí nào?",
        options: [
          "Hàng 3, Cột 1",
          "Hàng 2, Cột 1",
          "Hàng 3, Cột 2",
          "Hàng 1, Cột 3"
        ],
        answer: 0,
        explain: "Lưới 3 hàng 2 cột gồm 6 ô (đếm từ 1 theo hàng): Hàng 1 gồm ô 1, 2; Hàng 2 gồm ô 3, 4; Hàng 3 gồm ô 5, 6. Do đó ô số 5 nằm ở Hàng 3, Cột 1."
      }
    ]
  },
  {
    chapterId: "ch8",
    title: "Trắc nghiệm Chương 8: Giao diện GUI Tkinter",
    questions: [
      {
        question: "Vòng lặp `root.mainloop()` trong Tkinter có nhiệm vụ gì?",
        options: [
          "Biên dịch mã giao diện sang ngôn ngữ C",
          "Giữ cho cửa sổ ứng dụng mở liên tục và lắng nghe các sự kiện (click chuột, gõ phím) từ người dùng",
          "Tự động giải phóng bộ nhớ RAM khi tắt app",
          "Tự động căn chỉnh kích thước các widget"
        ],
        answer: 1,
        explain: "`mainloop()` là vòng lặp vô tận hướng sự kiện (Event Loop). Nếu thiếu dòng này, cửa sổ Tkinter sẽ nhấp nháy rồi tắt ngay lập tức vì luồng Python kết thúc kịch bản."
      },
      {
        question: "Để lấy giá trị từ ô nhập liệu `entry_L = tk.Entry(root)`, ta sử dụng cú pháp nào?",
        options: [
          "entry_L.value()",
          "entry_L.get()",
          "entry_L.text",
          "str(entry_L)"
        ],
        answer: 1,
        explain: "Phương thức `.get()` của widget Entry luôn trả về dữ liệu kiểu chuỗi `str`. Muốn tính toán kỹ thuật, ta phải ép kiểu sang số thực: `float(entry_L.get())`."
      }
    ]
  }
];
