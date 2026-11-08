/**
 * BỘ CÂU HỎI TRẮC NGHIỆM TƯƠNG TÁC (KIỂM TRA HIỂU SÂU BẢN CHẤT)
 * Môn: Lập trình Cơ Kỹ Thuật - ĐH Bách Khoa TP.HCM
 */

window.QUIZZES_DATA = [
  {
    "chapterId": "ch0_1",
    "title": "Trắc nghiệm Chương 0 & 1: Giới thiệu môn học & Cơ sở máy tính - Lập trình",
    "questions": [
      {
        "question": "Theo đề cương môn học Kỹ thuật Lập trình (Cơ Kỹ Thuật - HCMUT), trọng số của Bài tập lớn (BTL) và Thi cuối kỳ lần lượt là bao nhiêu?",
        "options": [
          "10% và 50%",
          "30% và 40%",
          "20% và 40%",
          "20% và 50%"
        ],
        "answer": 1,
        "explain": "Theo đề cương của PGS. TS. Nguyễn Thanh Nhã: Bài tập thực hành 10%, Bài tập lớn 30%, Kiểm tra giữa kỳ 20%, Thi cuối kỳ 40%."
      },
      {
        "question": "Chuyển số nhị phân 10110101.10100110 (hệ 2) sang hệ thập phân (theo đúng ví dụ slide Thầy Nhã) cho kết quả là:",
        "options": [
          "181.6484375",
          "181.5",
          "156.625",
          "175.75"
        ],
        "answer": 0,
        "explain": "Phần nguyên là 181 và phần phân số là 0.5 + 0.125 + 0.015625 + 0.0078125 = 0.6484375. Vậy kết quả chính xác là 181.6484375."
      },
      {
        "question": "Số thập phân 156 (hệ 10) khi chuyển sang hệ nhị phân (Bin) và hệ bát phân (Oct) lần lượt là:",
        "options": [
          "10011100 và 234",
          "11001100 và 234",
          "10011100 và 244",
          "10101000 và 224"
        ],
        "answer": 0,
        "explain": "Dùng phương pháp chia 2 lấy dư được 10011100 (hệ 2), chia 8 lấy dư được 234 (hệ 8)."
      },
      {
        "question": "Số thập lục phân 1AF (hệ 16) có giá trị tương ứng trong hệ thập phân là bao nhiêu?",
        "options": [
          "431",
          "341",
          "415",
          "426"
        ],
        "answer": 0,
        "explain": "1AF_16 = 1 * 16^2 + 10 * 16^1 + 15 * 16^0 = 256 + 160 + 15 = 431."
      },
      {
        "question": "Phép toán luận lý nào sau đây cho kết quả là True khi và chỉ khi hai đầu vào có giá trị logic trái ngược nhau?",
        "options": [
          "Toán tử XOR (Hoặc loại trừ)",
          "Toán tử AND (Và)",
          "Toán tử OR (Hoặc)",
          "Toán tử NOT (Phủ định)"
        ],
        "answer": 0,
        "explain": "Toán tử XOR (Exclusive OR) trả về True khi một trong hai đầu vào là True và đầu vào còn lại là False (hai đầu vào có giá trị logic khác nhau)."
      }
    ]
  },
  {
    "chapterId": "ch2_3",
    "title": "Trắc nghiệm Chương 2 & 3: Ngôn ngữ Python & Các kiểu dữ liệu kỹ thuật",
    "questions": [
      {
        "question": "Đặc tính 'Duck Typing' (Latent Typing) trong Python có nghĩa là gì?",
        "options": [
          "Kiểu dữ liệu được kiểm tra tự động tại thời điểm thực thi (runtime) dựa trên giá trị được gán",
          "Lập trình viên bắt buộc phải khai báo kiểu dữ liệu của biến trước khi sử dụng",
          "Chỉ hỗ trợ kiểu dữ liệu số nguyên và số thực",
          "Tất cả các biến đều được ép kiểu tự động sang chuỗi String"
        ],
        "answer": 0,
        "explain": "Theo slide Thầy Nhã (trang 6, Chương 2): Python sử dụng Duck typing, không kiểm tra ràng buộc kiểu tại thời điểm dịch mà xác định tự động tại thời điểm thực thi dựa trên phép gán."
      },
      {
        "question": "Câu lệnh nào sau đây sẽ gây ra lỗi `TypeError` do Python là ngôn ngữ định kiểu mạnh (Strongly Typed)?",
        "options": [
          "'abc' + 3",
          "'abc' * 3",
          "'abc' + '3'",
          "str(3) + 'abc'"
        ],
        "answer": 0,
        "explain": "Python không tự động chuyển đổi số 3 thành chuỗi '3' khi thực hiện phép cộng `+`. Phép toán `'abc' + 3` sẽ báo lỗi `TypeError: can only concatenate str (not 'int') to str`."
      },
      {
        "question": "Để khai báo một Tuple có DUY NHẤT một phần tử là số 5, cú pháp nào sau đây là CHÍNH XÁC?",
        "options": [
          "t = (5,)",
          "t = (5)",
          "t = [5]",
          "t = {5}"
        ],
        "answer": 0,
        "explain": "Theo slide Thầy Nhã (trang 15, Chương 3): Nếu tuple có 1 phần tử đơn thì bắt buộc phải có dấu phẩy ở cuối `(5,)`. Nếu chỉ viết `(5)` thì Python coi là số nguyên `int` trong dấu ngoặc."
      },
      {
        "question": "Trong Python, đối tượng thuộc kiểu dữ liệu nào sau đây KHÔNG THỂ được dùng làm Khóa (Key) trong Dictionary?",
        "options": [
          "List (ví dụ: ['x', 'y'])",
          "String (ví dụ: 'Heigh')",
          "Integer (ví dụ: 100)",
          "Tuple (ví dụ: (1, 2))"
        ],
        "answer": 0,
        "explain": "Khóa (Key) của Dictionary bắt buộc phải là kiểu BẤT BIẾN (Immutable) để có thể băm (Hashable). List là kiểu khả biến (Mutable) nên dùng làm key sẽ báo lỗi `TypeError: unhashable type: 'list'`."
      },
      {
        "question": "Cho chuỗi `s = 'Hello Python!'`. Cú pháp cắt lát (slicing) nào sau đây sẽ trả về chuỗi đảo ngược `'!nohtyP olleH'`?",
        "options": [
          "s[::-1]",
          "s[0:-1]",
          "s[-1:0]",
          "s[::1]"
        ],
        "answer": 0,
        "explain": "Cú pháp `s[Start:Stop:Step]` với bước nhảy `Step = -1` và bỏ trống Start, Stop sẽ duyệt toàn bộ chuỗi từ ký tự cuối cùng ngược về đầu, tạo ra chuỗi đảo ngược."
      }
    ]
  },
  {
    "chapterId": "ch4",
    "title": "Trắc nghiệm Chương 4: Các cấu trúc điều khiển trong Python",
    "questions": [
      {
        "question": "Trong Python, giá trị nào sau đây được coi là False khi đánh giá biểu thức điều kiện của lệnh `if`?",
        "options": [
          "Danh sách rỗng `[]`",
          "Số âm `-1`",
          "Chuỗi có dấu cách `' '`",
          "Danh sách chứa số 0 `[0]`"
        ],
        "answer": 0,
        "explain": "Theo quy tắc chân trị (Truth value testing) trong slide Thầy Nhã: Các tập hợp rỗng (`[]`, `\"\"`, `()`, `{}`), số 0 và hằng số `None` đều được coi là False."
      },
      {
        "question": "Khối `else` trong cấu trúc vòng lặp `for ... else` sẽ KHÔNG ĐƯỢC THỰC THI trong trường hợp nào?",
        "options": [
          "Vòng lặp bị ngắt đột ngột bởi lệnh `break`",
          "Vòng lặp hoàn thành duyệt hết tất cả các phần tử",
          "Vòng lặp gặp lệnh `continue`",
          "Vòng lặp gặp lệnh `pass`"
        ],
        "answer": 0,
        "explain": "Khối `else` của vòng lặp for/while chỉ chạy khi vòng lặp kết thúc bình thường. Nếu bị ngắt bởi `break`, khối `else` sẽ lập tức bị bỏ qua."
      },
      {
        "question": "Lời gọi hàm `range(5, 2, -1)` trong Python sinh ra dãy các số nguyên nào?",
        "options": [
          "5, 4, 3",
          "5, 4, 3, 2",
          "5, 3, 1",
          "2, 3, 4, 5"
        ],
        "answer": 0,
        "explain": "Hàm range với bước nhảy âm bắt đầu từ 5, giảm mỗi lần 1 đơn vị và DỪNG LẠI TRƯỚC giá trị stop là 2. Do đó dãy số là: 5, 4, 3."
      },
      {
        "question": "Theo quy tắc kiểm tra năm nhuận trong bài giảng của Thầy Nhã, năm nào sau đây là năm nhuận?",
        "options": [
          "Năm 2000 (chia hết cho 400)",
          "Năm 1900 (chia hết cho 100)",
          "Năm 2021",
          "Năm 2023"
        ],
        "answer": 0,
        "explain": "Năm nhuận là năm chia hết cho 4 nhưng không chia hết cho 100, HOẶC chia hết cho 400. Năm 2000 chia hết cho 400 nên là năm nhuận (tháng 2 có 29 ngày). Năm 1900 chia hết cho 100 nhưng không chia hết cho 400 nên không phải năm nhuận."
      },
      {
        "question": "Trong vòng lặp `while`, nếu biến điều khiển không thay đổi giá trị để tiến về phía điều kiện dừng, hiện tượng gì sẽ xảy ra?",
        "options": [
          "Vòng lặp vô tận (Infinite Loop) làm treo máy hoặc tràn tài nguyên",
          "Chương trình tự động phát hiện và thoát ra sau 100 vòng lặp",
          "Python tự động ném ra ngoại lệ `RecursionError`",
          "Chương trình tự động chuyển sang vòng lặp `for`"
        ],
        "answer": 0,
        "explain": "Vòng lặp while tiếp tục chạy chừng nào điều kiện còn True. Nếu biến điều khiển không tiến về điều kiện dừng (ví dụ: đếm lùi `count = count - 1` trong khi điều kiện `count < 9`), chương trình sẽ rơi vào vòng lặp vô tận."
      }
    ]
  },
  {
    "chapterId": "ch5",
    "title": "Trắc nghiệm Chương 5: Hàm và Module",
    "questions": [
      {
        "question": "Đoạn code sau xuất ra kết quả gì?\n```python\ndef them_luc(p_list, p=10):\n    p_list.append(p)\n\nloads = [50, 60]\nthem_luc(loads, 70)\nprint(loads)\n```",
        "options": [
          "[50, 60]",
          "[50, 60, 70]",
          "[70]",
          "Lỗi UnboundLocalError"
        ],
        "answer": 1,
        "explain": "List là kiểu dữ liệu khả biến (Mutable). Khi truyền vào hàm theo cơ chế Pass-by-object-reference, phương thức `.append()` sửa trực tiếp lên vùng nhớ của list gốc bên ngoài hàm."
      },
      {
        "question": "Trong định nghĩa hàm `def tinh_toan(*args, **kwargs):`, kiểu dữ liệu của `args` và `kwargs` bên trong hàm lần lượt là gì?",
        "options": [
          "List và Dictionary",
          "Tuple và Dictionary",
          "Tuple và List",
          "Set và Dictionary"
        ],
        "answer": 1,
        "explain": "`*args` gom các tham số vị trí không định danh vào một `Tuple` (bất biến), còn `**kwargs` gom các tham số có tên khóa (keyword arguments) vào một `Dictionary`."
      },
      {
        "question": "Khối lệnh `if __name__ == '__main__':` trong file module có ý nghĩa gì?",
        "options": [
          "Bắt buộc phải có để Python biên dịch file sang mã máy",
          "Chỉ thực thi đoạn code bên trong khi file được chạy trực tiếp, không chạy khi bị import vào file khác",
          "Khởi tạo hàm main() giống như trong C++ hay Java",
          "Kiểm tra xem người dùng có quyền quản trị (Admin) hay không"
        ],
        "answer": 1,
        "explain": "Khi chạy trực tiếp file bằng `python file.py`, biến `__name__` có giá trị là `'__main__'`. Khi file đó được file khác import, `__name__` sẽ là tên của module, giúp ngăn các đoạn code kiểm thử tự động chạy khi import."
      }
    ]
  },
  {
    "chapterId": "ch6",
    "title": "Trắc nghiệm Chương 6: Lập trình Hướng đối tượng OOP",
    "questions": [
      {
        "question": "Tham số `self` đầu tiên trong các phương thức của class đại diện cho điều gì?",
        "options": [
          "Đại diện cho chính class cha",
          "Đại diện cho chính đối tượng thể hiện (instance) cụ thể đang gọi phương thức",
          "Là một biến toàn cục (global variable) lưu trữ trạng thái",
          "Tự động trỏ tới hàm khởi tạo __init__"
        ],
        "answer": 1,
        "explain": "`self` là tham chiếu trỏ tới đối tượng cụ thể (instance) đang thực thi phương thức, cho phép truy cập và thay đổi các thuộc tính riêng `self.x`, `self.y` của đối tượng đó."
      },
      {
        "question": "Trong bài toán kế thừa: class Rectangle kế thừa từ class Quadrangle. Lệnh nào sau đây gọi hàm khởi tạo của lớp cha đúng chuẩn nhất?",
        "options": [
          "Quadrangle.__init__(self, p1, p2, p3, p4)",
          "super().__init__(p1, p2, p3, p4)",
          "parent.__init__(p1, p2, p3, p4)",
          "Cả A và B đều đúng"
        ],
        "answer": 3,
        "explain": "Cả A và B đều hoạt động, nhưng cách dùng `super().__init__(...)` (Cách B) là chuẩn mực và hiện đại nhất trong Python 3 vì hỗ trợ tốt đa kế thừa (MRO)."
      }
    ]
  },
  {
    "chapterId": "ch7",
    "title": "Trắc nghiệm Chương 7: NumPy & Matplotlib",
    "questions": [
      {
        "question": "Để giải hệ phương trình cân bằng kết cấu [A]{X} = {B}, tại sao nên dùng `np.linalg.solve(A, B)` thay vì `np.linalg.inv(A) @ B`?",
        "options": [
          "`solve` sử dụng phân rã LU, nhanh hơn và ít tích lũy sai số làm tròn số thực hơn tính ma trận nghịch đảo",
          "Tính ma trận nghịch đảo `inv(A)` tốn nhiều bộ nhớ RAM hơn",
          "`inv(A)` sẽ báo lỗi nếu ma trận có số chiều lớn hơn 2",
          "Cả A và B đều đúng"
        ],
        "answer": 3,
        "explain": "Việc tính nghịch đảo tường minh `inv(A)` vừa tốn gấp đôi phép tính vừa gây sai số tích lũy lớn khi ma trận có điều kiện xấu (ill-conditioned). Hàm `solve` dùng thuật toán phân rã LU tối ưu hơn nhiều."
      },
      {
        "question": "Lệnh `plt.subplot(3, 2, 5)` trong Matplotlib tạo khung đồ thị nằm ở vị trí nào?",
        "options": [
          "Hàng 3, Cột 1",
          "Hàng 2, Cột 1",
          "Hàng 3, Cột 2",
          "Hàng 1, Cột 3"
        ],
        "answer": 0,
        "explain": "Lưới 3 hàng 2 cột gồm 6 ô (đếm từ 1 theo hàng): Hàng 1 gồm ô 1, 2; Hàng 2 gồm ô 3, 4; Hàng 3 gồm ô 5, 6. Do đó ô số 5 nằm ở Hàng 3, Cột 1."
      }
    ]
  },
  {
    "chapterId": "ch8",
    "title": "Trắc nghiệm Chương 8: Giao diện GUI Tkinter",
    "questions": [
      {
        "question": "Vòng lặp `root.mainloop()` trong Tkinter có nhiệm vụ gì?",
        "options": [
          "Biên dịch mã giao diện sang ngôn ngữ C",
          "Giữ cho cửa sổ ứng dụng mở liên tục và lắng nghe các sự kiện (click chuột, gõ phím) từ người dùng",
          "Tự động giải phóng bộ nhớ RAM khi tắt app",
          "Tự động căn chỉnh kích thước các widget"
        ],
        "answer": 1,
        "explain": "`mainloop()` là vòng lặp vô tận hướng sự kiện (Event Loop). Nếu thiếu dòng này, cửa sổ Tkinter sẽ nhấp nháy rồi tắt ngay lập tức vì luồng Python kết thúc kịch bản."
      },
      {
        "question": "Để lấy giá trị từ ô nhập liệu `entry_L = tk.Entry(root)`, ta sử dụng cú pháp nào?",
        "options": [
          "entry_L.value()",
          "entry_L.get()",
          "entry_L.text",
          "str(entry_L)"
        ],
        "answer": 1,
        "explain": "Phương thức `.get()` của widget Entry luôn trả về dữ liệu kiểu chuỗi `str`. Muốn tính toán kỹ thuật, ta phải ép kiểu sang số thực: `float(entry_L.get())`."
      }
    ]
  }
];
