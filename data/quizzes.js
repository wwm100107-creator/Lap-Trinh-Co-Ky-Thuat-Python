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
    "title": "Trắc nghiệm Chương 5: Hàm và Module trong Python",
    "questions": [
      {
        "question": "Theo bài giảng của PGS. TS. Nguyễn Thanh Nhã, 'Tham số' (Parameter) và 'Đối số' (Argument) khác nhau như thế nào?",
        "options": [
          "Parameter xuất hiện trong định nghĩa hàm (def); Argument xuất hiện trong lời gọi hàm thực tế",
          "Parameter xuất hiện trong lời gọi hàm; Argument xuất hiện trong định nghĩa hàm",
          "Parameter và Argument là hai từ đồng nghĩa hoàn toàn giống nhau",
          "Parameter bắt buộc phải là hằng số, còn Argument bắt buộc phải là biến"
        ],
        "answer": 0,
        "explain": "Theo slide Thầy Nhã (trang 5, Chương 5): Tham số (Parameter) là biến xuất hiện trong phần định nghĩa hàm sau 'def'; còn Đối số (Argument) là giá trị, biến hoặc biểu thức thực tế xuất hiện trong lời gọi hàm."
      },
      {
        "question": "Quan sát đoạn mã sau từ slide Thầy Nhã (trang 8):\n```python\ndef changeme(mylist):\n    mylist = [1, 2, 3, 4]\n\nmyList = [10, 20, 30]\nchangeme(myList)\nprint(myList)\n```\nKết quả in ra màn hình là gì?",
        "options": [
          "[10, 20, 30]",
          "[1, 2, 3, 4]",
          "[10, 20, 30, [1, 2, 3, 4]]",
          "Báo lỗi UnboundLocalError"
        ],
        "answer": 0,
        "explain": "Bên trong hàm changeme, phép gán `mylist = [1, 2, 3, 4]` tạo ra một đối tượng List mới tinh và chỉ gán cho con trỏ cục bộ mylist. Biến myList bên ngoài hàm vẫn trỏ vào danh sách ban đầu [10, 20, 30] không hề bị ảnh hưởng!"
      },
      {
        "question": "Cú pháp định nghĩa hàm nặc danh Lambda trong Python là gì?",
        "options": [
          "lambda [arg1, arg2, ...]: bieu_thuc",
          "def lambda [arg1, arg2, ...]: return bieu_thuc",
          "function lambda(arg1, arg2) => bieu_thuc",
          "lambda: {arg1, arg2 -> bieu_thuc}"
        ],
        "answer": 0,
        "explain": "Theo slide Thầy Nhã (trang 12, Chương 5): Cú pháp chuẩn của hàm nặc danh là `lambda [arg1, arg2, ...]: bieu_thuc`. Lambda chỉ chứa 1 biểu thức duy nhất và tự động trả về giá trị biểu thức đó."
      },
      {
        "question": "Quy tắc bắt buộc khi định nghĩa hàm có tham số mặc định (Default arguments) trong Python là gì?",
        "options": [
          "Các tham số mặc định bắt buộc phải đặt ở sau cùng của danh sách tham số",
          "Các tham số mặc định bắt buộc phải đặt ở đầu tiên",
          "Có thể đặt tham số mặc định ở bất kỳ vị trí nào",
          "Mỗi hàm chỉ được phép có duy nhất 1 tham số mặc định"
        ],
        "answer": 0,
        "explain": "Theo slide Thầy Nhã (trang 9, Chương 5): Trong Python, các tham số mặc định bắt buộc phải đặt sau cùng danh sách tham số. Khai báo dạng `def f(a=1, b):` sẽ bị báo lỗi `SyntaxError: non-default argument follows default argument`."
      },
      {
        "question": "Khối lệnh `if __name__ == '__main__':` trong một file module Python có ý nghĩa kỹ thuật gì?",
        "options": [
          "Ngăn các đoạn code chạy thử nghiệm tự động thực thi khi file đó được module khác import",
          "Ép buộc file đó phải chạy bằng quyền Administrator",
          "Khai báo hàm main cho chương trình giống ngôn ngữ C/C++",
          "Định nghĩa điểm bắt đầu của một vòng lặp vô hạn"
        ],
        "answer": 0,
        "explain": "Khi chạy trực tiếp file bằng `python file.py`, biến `__name__` có giá trị `'__main__'`. Khi được file khác import, `__name__` mang tên của module. Khối lệnh này giúp các câu lệnh test không bị chạy ngoài ý muốn khi module được tái sử dụng."
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
