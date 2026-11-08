/**
 * LẬP TRÌNH CƠ KỸ THUẬT - PYTHON TOÀN DIỆN
 * Bộ môn Cơ Kỹ Thuật - Đại học Bách Khoa TP.HCM (HCMUT)
 * Dữ liệu lý thuyết chi tiết các chương (Chương 0 -> Chương 8)
 */

window.CHAPTERS_DATA = [
  {
    id: "ch0_1",
    code: "CH0-1",
    title: "Chương 0 & 1: Giới thiệu môn học & Cơ sở lập trình",
    tag: "Nền tảng",
    desc: "Tổng quan cấu trúc máy tính Von Neumann, nguyên lý dịch mã (Compiler vs Interpreter) và vai trò của Python trong tính toán Cơ Kỹ Thuật.",
    content: `
      <h2>1. Tổng quan & Mục tiêu môn học</h2>
      <p>Môn học <strong>Kỹ thuật Lập trình (Cơ Kỹ Thuật)</strong> tại ĐHBK TP.HCM trang bị cho sinh viên năng lực ứng dụng ngôn ngữ Python để mô hình hóa và giải quyết các bài toán cơ học: tính toán nội lực, biến dạng của kết cấu dầm/giàn, giải hệ phương trình tuyến tính quy mô lớn, tính xấp xỉ số, hình học tính toán và tự động hóa vẽ biểu đồ kỹ thuật.</p>
      
      <div class="note-box">
        <strong>💡 Môi trường khuyến nghị:</strong> PyCharm Professional/Community hoặc VS Code kết hợp với Python 3.10+. Trong các bài thi, việc cấu trúc code rõ ràng và viết đúng chuẩn PEP8 là tiêu chí chấm điểm quan trọng.
      </div>

      <h2>2. Cơ sở máy tính & Nguyên lý thông dịch Python</h2>
      <p>Python là ngôn ngữ thông dịch (Interpreted Language). Khác với C/C++ biên dịch trực tiếp sang mã máy (.exe), Python biên dịch mã nguồn (.py) sang Bytecode (.pyc) rồi thực thi trên <strong>Python Virtual Machine (PVM)</strong>.</p>
      
      <div class="mermaid">
      flowchart LR
          Src["Mã nguồn Python (.py)"] --> Compiler["Python Compiler"]
          Compiler --> Bytecode["Bytecode (.pyc)"]
          Bytecode --> PVM["Máy ảo PVM (C implementation)"]
          PVM --> Hardware["Phần cứng CPU / RAM"]
      </div>

      <h3>Đặc tính của Python trong tính toán kỹ thuật:</h3>
      <ul>
        <li><strong>Cú pháp rõ ràng, súc tích:</strong> Rút ngắn thời gian phát triển thuật toán so với Fortran hay C++.</li>
        <li><strong>Hệ sinh thái khoa học cực mạnh:</strong> Thư viện <code>NumPy</code>, <code>SciPy</code>, <code>Matplotlib</code>, <code>SymPy</code> được viết bằng C/Fortran ở tầng dưới, mang lại tốc độ tính toán ma trận tương đương với phần mềm thương mại MATLAB.</li>
      </ul>
    `
  },
  {
    id: "ch2_3",
    code: "CH2-3",
    title: "Chương 2 & 3: Cú pháp cơ bản & Các kiểu dữ liệu kỹ thuật",
    tag: "Nền tảng",
    desc: "Làm chủ biến, toán tử số học, chuỗi và 4 cấu trúc dữ liệu nền tảng: List, Tuple, Dictionary, Set ứng dụng trong lưu trữ ma trận và tọa độ.",
    content: `
      <h2>1. Biến, Toán tử và Nhập/Xuất trong Python</h2>
      <p>Python là ngôn ngữ định kiểu động (Dynamic Typing), bạn không cần khai báo kiểu dữ liệu trước.</p>
      
      <pre><code class="language-python"># Nhập tọa độ 2 điểm trong mặt phẳng Oxy
x1, y1 = map(float, input("Nhập tọa độ A (x1 y1): ").split())
x2, y2 = map(float, input("Nhập tọa độ B (x2 y2): ").split())

# Tính khoảng cách Euclidean giữa 2 điểm A và B
import math
distance = math.hypot(x2 - x1, y2 - y1)
print(f"Khoảng cách AB = {distance:.4f} (m)")
</code></pre>

      <h2>2. Bốn cấu trúc dữ liệu cốt lõi trong Cơ Kỹ Thuật</h2>
      <div class="table-container">
        <table>
          <thead>
            <tr>
              <th>Cấu trúc</th>
              <th>Khả biến (Mutable)</th>
              <th>Có thứ tự (Ordered)</th>
              <th>Ứng dụng điển hình trong Cơ Kỹ Thuật</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>List <code>[]</code></strong></td>
              <td>Có</td>
              <td>Có</td>
              <td>Mảng tọa độ các nút dầm, danh sách tải trọng tác dụng, ma trận 2 chiều.</td>
            </tr>
            <tr>
              <td><strong>Tuple <code>()</code></strong></td>
              <td>Không</td>
              <td>Có</td>
              <td>Tọa độ cố định của điểm <code>(x, y, z)</code>, kích thước hình học không đổi.</td>
            </tr>
            <tr>
              <td><strong>Dict <code>{}</code></strong></td>
              <td>Có</td>
              <td>Theo khóa (Key)</td>
              <td>Lưu thông tin vật liệu <code>{'E': 2.1e11, 'nu': 0.3}</code>, cơ sở dữ liệu sinh viên MSSV.</td>
            </tr>
            <tr>
              <td><strong>Set <code>{}</code></strong></td>
              <td>Có</td>
              <td>Không</td>
              <td>Loại bỏ các phần tử trùng lặp, tìm nút chung giữa các phần tử hữu hạn.</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>3. Ví dụ thực chiến: Quản lý tải trọng dầm 5 nút liên kết</h2>
      <p><em>(Trích bài tập thực tế tại lớp - Câu 10 BÀI TẬP CHƯƠNG 3)</em></p>
      <pre><code class="language-python"># Danh sách lực tập trung P (kN) tại 5 nút: [nút 0, nút 1, nút 2, nút 3, nút 4]
loads = [15.0, 22.5, 30.0, 18.5, 12.0]

# a) Cảm biến báo nút số 2 chịu thêm tải 8.5 kN
loads[2] += 8.5

# b) Bổ sung một nút kiểm tra mới tại chỉ mục 1 với lực 10.0 kN
loads.insert(1, 10.0)

# c) Thêm một lực gối tựa 25.0 kN vào cuối danh sách
loads.append(25.0)

# d) Loại bỏ tải trọng tại nút cuối và lưu vào biến riêng để báo cáo
last_load = loads.pop()

print("Danh sách tải trọng sau cập nhật:", loads)
print(f"Lực gối tựa cuối dầm đã tách: {last_load} kN")
</code></pre>
    `
  },
  {
    id: "ch4",
    code: "CH4",
    title: "Chương 4: Cấu trúc điều khiển (Củng cố & Nâng cao)",
    tag: "Trọng tâm",
    desc: "Nắm vững bản chất rẽ nhánh if-elif-else, vòng lặp for/while, cạm bẫy so sánh số thực float, và thuật toán hình học tính toán.",
    content: `
      <h2>1. Bản chất cấu trúc điều kiện: if - elif - else</h2>
      <p>Trong tính toán số kỹ thuật, cạm bẫy nguy hiểm nhất là <strong>so sánh bằng trên số thực (floating-point comparison)</strong>. Do chuẩn IEEE 754, <code>0.1 + 0.2 == 0.3</code> sẽ trả về <code>False</code>!</p>
      
      <div class="note-box warning">
        <strong>⚠️ Quy tắc vàng cho kỹ sư:</strong> Tuyệt đối không dùng <code>a == b</code> với số thực. Luôn dùng khoảng sai số tuyệt đối: <code>abs(a - b) < 1e-9</code> hoặc <code>math.isclose(a, b, abs_tol=1e-7)</code>.
      </div>

      <h3>Mô hình rẽ nhánh chuẩn:</h3>
      <div class="mermaid">
      flowchart TD
          A(["Bắt đầu"]) --> B{"Điều kiện 1 đúng?"}
          B -- "True" --> C["Thực thi Khối 1"] --> End(["Kết thúc"])
          B -- "False" --> D{"Điều kiện 2 đúng?"}
          D -- "True" --> E["Thực thi Khối 2"] --> End
          D -- "False" --> F["Thực thi Khối else"] --> End
      </div>

      <h2>2. Giải và biện luận phương trình bậc hai $ax^2 + bx + c = 0$</h2>
      <p>Một ví dụ kinh điển đòi hỏi tư duy phân nhánh đầy đủ mọi trường hợp (khi $a=0$ trở thành phương trình bậc nhất):</p>
      
      <div class="mermaid">
      flowchart TD
          Start(["Bắt đầu: Nhập a, b, c"]) --> CheckA{"abs(a) < 1e-9?"}
          CheckA -- "Đúng (a = 0)" --> Linear{"abs(b) < 1e-9?"}
          Linear -- "Đúng (b = 0)" --> CheckC{"abs(c) < 1e-9?"}
          CheckC -- "Đúng" --> OutInf["Vô số nghiệm"] --> Fin(["Kết thúc"])
          CheckC -- "Sai" --> OutVN["Vô nghiệm"] --> Fin
          Linear -- "Sai (b != 0)" --> OutLin["Nghiệm x = -c / b"] --> Fin
          
          CheckA -- "Sai (a != 0)" --> CalcDelta["Delta = b^2 - 4ac"]
          CalcDelta --> CheckDelta{"Delta?"}
          CheckDelta -- "Delta > 0" --> TwoRoots["2 nghiệm phân biệt:<br>x1, x2 = (-b +- sqrt(Delta)) / (2a)"] --> Fin
          CheckDelta -- "Delta == 0" --> OneRoot["Nghiệm kép:<br>x = -b / (2a)"] --> Fin
          CheckDelta -- "Delta < 0" --> ComplexRoots["Nghiệm phức:<br>x = (-b / 2a) +- i * (sqrt(-Delta) / 2a)"] --> Fin
      </div>

      <pre><code class="language-python">import math

def giai_pt_bac_hai(a, b, c, eps=1e-9):
    if abs(a) < eps:
        # Phương trình suy biến: bx + c = 0
        if abs(b) < eps:
            return "Vô số nghiệm" if abs(c) < eps else "Vô nghiệm"
        else:
            return f"Nghiệm bậc nhất x = {-c / b:.4f}"
    
    delta = b**2 - 4*a*c
    if delta > eps:
        x1 = (-b + math.sqrt(delta)) / (2*a)
        x2 = (-b - math.sqrt(delta)) / (2*a)
        return f"Hai nghiệm phân biệt: x1 = {x1:.4f}, x2 = {x2:.4f}"
    elif abs(delta) <= eps:
        x0 = -b / (2*a)
        return f"Nghiệm kép: x0 = {x0:.4f}"
    else:
        real = -b / (2*a)
        imag = math.sqrt(-delta) / (2*a)
        return f"Nghiệm phức: x1 = {real:.4f} + {imag:.4f}i, x2 = {real:.4f} - {imag:.4f}i"

# Chạy thử
print(giai_pt_bac_hai(1, -5, 6))  # x1=3, x2=2
print(giai_pt_bac_hai(1, 2, 5))   # Nghiệm phức
</code></pre>

      <h2>3. Vòng lặp For và While trong mô phỏng kỹ thuật</h2>
      <ul>
        <li><code>for i in range(start, stop, step)</code>: Thích hợp chia thanh dầm $L$ thành $N$ mút phần tử.</li>
        <li><code>while condition:</code>: Thích hợp với các phép lặp giải thuật số yêu cầu hội tụ tới khi sai số $\le \epsilon$.</li>
        <li><code>break</code> và <code>continue</code>: Điều khiển bước nhảy và ngắt vòng lặp.</li>
      </ul>

      <h3>Ví dụ: Thuật toán dò tìm vị trí nguy hiểm trên thanh dầm</h3>
      <p>Cho hàm mô men uốn $M(x) = -5x^2 + 40x - 20\text{ (kNm)}$ trên dầm dài $L = 8\text{ m}$. Dò tìm mô men lớn nhất bằng bước quét $\Delta x = 0.05\text{ m}$:</p>

      <pre><code class="language-python">L = 8.0
dx = 0.05
x = 0.0

max_M = -float('inf')
best_x = 0.0

while x <= L + 1e-9:
    # Hàm mô men uốn
    Mx = -5 * (x**2) + 40 * x - 20
    if Mx > max_M:
        max_M = Mx
        best_x = x
    x += dx

print(f"Mô men uốn cực đại: M_max = {max_M:.2f} kNm tại x = {best_x:.2f} m")
# Giá trị giải tích chính xác: x = -b/(2a) = -40 / (2*(-5)) = 4.0 m -> M = 60 kNm
</code></pre>
    `
  },
  {
    id: "ch5",
    code: "CH5",
    title: "Chương 5: Hàm và Module (Tổ chức mã nguồn chuyên sâu)",
    tag: "Trọng tâm",
    desc: "Tham số bắt buộc, từ khóa, *args, **kwargs, phạm vi biến LEGB, truyền tham trị vs tham chiếu, xây dựng module vectorEM và matrixEM.",
    content: `
      <h2>1. Cú pháp hàm & Cơ chế trả về nhiều giá trị</h2>
      <p>Trong Python, một hàm có thể trả về nhiều giá trị cùng lúc dưới dạng một <strong>Tuple</strong>, sau đó giải nén (unpacking) ở nơi gọi.</p>

      <pre><code class="language-python">def phan_tich_luc(F, alpha_deg):
    """
    Phân tích lực F nghiêng góc alpha so với phương ngang thành 2 thành phần Fx, Fy.
    """
    import math
    rad = math.radians(alpha_deg)
    Fx = F * math.cos(rad)
    Fy = F * math.sin(rad)
    return Fx, Fy  # Trả về 1 tuple (Fx, Fy)

# Sử dụng
Fx, Fy = phan_tich_luc(100, 30)
print(f"Fx = {Fx:.2f} N, Fy = {Fy:.2f} N")
</code></pre>

      <h2>2. Tham số & Đối số (Positional, Default, *args, **kwargs)</h2>
      <div class="mermaid">
      flowchart TD
          Call["Gọi hàm func(10, 20, mode='FEA', debug=True)"] --> Pos["10, 20: Positional Args"]
          Call --> Kw["mode='FEA', debug=True: Keyword Args"]
          Pos --> Def1["def func(*args): gom vào tuple"]
          Kw --> Def2["def func(**kwargs): gom vào dict"]
      </div>

      <pre><code class="language-python"># Hàm tính tổng tải trọng bất kỳ tác dụng lên dầm (*args)
def tinh_tong_tai(*loads, factor=1.2):
    """
    loads: danh sách tùy ý các lực P1, P2, P3,... (thu nhận bằng *args)
    factor: hệ số an toàn tải trọng (default = 1.2)
    """
    tong = sum(loads)
    return tong * factor

print("Tải trọng thiết kế 1:", tinh_tong_tai(10, 15, 20))           # 3 lực
print("Tải trọng thiết kế 2:", tinh_tong_tai(5, 5, factor=1.5))       # 2 lực, đổi hệ số
</code></pre>

      <h2>3. Phạm vi biến & Cơ chế truyền đối số (Pass-by-Object-Reference)</h2>
      <div class="note-box alert">
        <strong>🔴 Phân biệt cực kỳ quan trọng:</strong>
        <ul>
          <li><strong>Immutable (Số, Chuỗi, Tuple):</strong> Khi truyền vào hàm, hàm không thể thay đổi giá trị của biến gốc bên ngoài (giống truyền tham trị Pass-by-value).</li>
          <li><strong>Mutable (List, Dict):</strong> Khi truyền List vào hàm và dùng các phương thức như <code>.append()</code>, <code>[0] = ...</code>, biến gốc ngoài hàm sẽ <strong>bị thay đổi theo</strong> (Side effect)! Để an toàn, hãy truyền một bản sao <code>list.copy()</code>.</li>
        </ul>
      </div>

      <h2>4. Xây dựng Module chuyên ngành: vectorEM.py & matrixEM.py</h2>
      <p><em>(Theo yêu cầu bài tập 20 & 21 trong BT Chương 5)</em></p>
      
      <h3>Module <code>vectorEM.py</code>:</h3>
      <pre><code class="language-python"># File: vectorEM.py
import math

def dot_product(v1, v2):
    """Tính tích vô hướng của 2 vector bất kỳ cùng số chiều"""
    if len(v1) != len(v2):
        raise ValueError("Hai vector phải có cùng kích thước!")
    return sum(a * b for a, b in zip(v1, v2))

def outer_product(v1, v2):
    """Tích ngoài của 2 vector trả về ma trận (Tensor Product): M_ij = v1_i * v2_j"""
    return [[a * b for b in v2] for a in v1]

def add_vector(v1, v2):
    """Tính tổng của 2 vector"""
    return [a + b for a, b in zip(v1, v2)]

def norm(v):
    """Tính độ dài (độ lớn) Euclidean của vector"""
    return math.sqrt(sum(x**2 for x in v))
</code></pre>

      <h3>Module <code>matrixEM.py</code>:</h3>
      <pre><code class="language-python"># File: matrixEM.py

def add_matrix(A, B):
    """Tính tổng hai ma trận bất kỳ cùng kích thước"""
    rows = len(A)
    cols = len(A[0])
    return [[A[i][j] + B[i][j] for j in range(cols)] for i in range(rows)]

def multiply_matrix(A, B):
    """Tính tích 2 ma trận A (m x n) và B (n x p) -> C (m x p)"""
    m, n = len(A), len(A[0])
    n_b, p = len(B), len(B[0])
    if n != n_b:
        raise ValueError("Số cột của A phải bằng số hàng của B!")
    
    C = [[0.0] * p for _ in range(m)]
    for i in range(m):
        for j in range(p):
            C[i][j] = sum(A[i][k] * B[k][j] for k in range(n))
    return C

def get_submatrix(A, remove_row, remove_col):
    """Chiết xuất ma trận con bằng cách bỏ hàng remove_row và cột remove_col"""
    return [
        [val for c_idx, val in enumerate(row) if c_idx != remove_col]
        for r_idx, row in enumerate(A) if r_idx != remove_row
    ]

def determinant(A):
    """Tính định thức ma trận vuông cấp n bằng đệ quy (Khai triển Laplace)"""
    n = len(A)
    if n == 1:
        return A[0][0]
    if n == 2:
        return A[0][0] * A[1][1] - A[0][1] * A[1][0]
    
    det = 0.0
    for col in range(n):
        sub = get_submatrix(A, 0, col)
        sign = (-1) ** col
        det += sign * A[0][col] * determinant(sub)
    return det
</code></pre>

      <h2>5. Phương pháp tính xấp xỉ tích phân hình thang (Numerical Integration)</h2>
      <p>Tính $I = \int_{a}^{b} f(x) dx$ với quy tắc hình thang (Trapezoidal Rule):</p>
      $$I \approx \frac{h}{2} \left[ f(a) + 2 \sum_{k=1}^{n-1} f(x_k) + f(b) \right], \quad h = \frac{b - a}{n}$$

      <pre><code class="language-python">def tich_phan_hinh_thang(f, a, b, n=1000):
    h = (b - a) / n
    tong = 0.5 * (f(a) + f(b))
    for i in range(1, n):
        tong += f(a + i * h)
    return tong * h

# Tính tích phân hàm parabol tải trọng q(x) = 2x^2 + 3x + 1 từ 0 đến 4
q = lambda x: 2*(x**2) + 3*x + 1
I = tich_phan_hinh_thang(q, 0, 4, n=2000)
print(f"Tổng hợp lực Q = {I:.4f} kN")
</code></pre>
    `
  },
  {
    id: "ch6",
    code: "CH6",
    title: "Chương 6: Lập trình Hướng đối tượng OOP (Cơ Kỹ Thuật)",
    tag: "Trọng tâm",
    desc: "Xây dựng hệ sinh thái lớp hình học từ Point2D, Triangle đến Quadrangle, Rectangle, Square và mô hình dầm kết cấu theo bài tập lớn.",
    content: `
      <h2>1. Tư duy Hướng đối tượng (Object-Oriented Programming)</h2>
      <p>Trong Cơ Kỹ Thuật, các thực thể vật lý đều có <strong>Thuộc tính (Attributes)</strong> và <strong>Hành vi (Methods)</strong>:</p>
      <ul>
        <li><strong>Điểm nút (Node/Point2D):</strong> Tọa độ $(x, y)$, chuyển vị $(u, v)$.</li>
        <li><strong>Thanh giàn/Dầm (Element):</strong> Nút đầu, nút cuối, diện tích $A$, mô-đun đàn hồi $E$, chiều dài $L$, ma trận độ cứng $[k]$.</li>
      </ul>

      <div class="mermaid">
      classDiagram
          class Point2D {
              +float x
              +float y
              +getX() float
              +getY() float
              +distance_to(p) float
          }
          class Triangle {
              +Point2D p1
              +Point2D p2
              +Point2D p3
              +getLens() list
              +getArea() float
              +getCircum() float
              +isInside(p) bool
              +getCenter() Point2D
          }
          class Quadrangle {
              +Point2D p1, p2, p3, p4
              +getLens() list
              +getArea() float
              +isParallel() bool
              +isRect() bool
              +isLozenge() bool
              +isSquare() bool
          }
          class Rectangle {
              +Point2D p1, p3
              +getArea() float
          }
          class Square {
              +Point2D p1
              +float L
          }

          Point2D --* Triangle : chứa 3 điểm
          Point2D --* Quadrangle : chứa 4 điểm
          Quadrangle <|-- Rectangle : kế thừa
          Rectangle <|-- Square : kế thừa
      </div>

      <h2>2. Triển khai Class Point2D chuẩn</h2>
      <pre><code class="language-python">import math

class Point2D:
    def __init__(self, x=0.0, y=0.0):
        self.x = float(x)
        self.y = float(y)
    
    def getX(self):
        return self.x
    
    def getY(self):
        return self.y
    
    def distance_to(self, other):
        """Tính khoảng cách Euclidean đến điểm khác"""
        return math.hypot(self.x - other.x, self.y - other.y)
    
    def __repr__(self):
        return f"Point2D({self.x:.2f}, {self.y:.2f})"
</code></pre>

      <h2>3. Triển khai Class Triangle (Tam giác)</h2>
      <pre><code class="language-python">class Triangle:
    def __init__(self, p1, p2, p3):
        self.p1 = p1
        self.p2 = p2
        self.p3 = p3
        if self.getArea() < 1e-9:
            raise ValueError("3 điểm thẳng hàng, không tạo thành tam giác!")
            
    def getLens(self):
        """Trả về độ dài 3 cạnh [a, b, c]"""
        a = self.p2.distance_to(self.p3)
        b = self.p3.distance_to(self.p1)
        c = self.p1.distance_to(self.p2)
        return [a, b, c]
        
    def getCircum(self):
        return sum(self.getLens())
        
    def getArea(self):
        """Công thức diện tích Shoelace"""
        x1, y1 = self.p1.x, self.p1.y
        x2, y2 = self.p2.x, self.p2.y
        x3, y3 = self.p3.x, self.p3.y
        return 0.5 * abs(x1*(y2 - y3) + x2*(y3 - y1) + x3*(y1 - y2))
        
    def isInside(self, p):
        """Kiểm tra điểm p có nằm trong tam giác không bằng so sánh diện tích"""
        s_main = self.getArea()
        s1 = Triangle(p, self.p1, self.p2).getArea()
        s2 = Triangle(p, self.p2, self.p3).getArea()
        s3 = Triangle(p, self.p3, self.p1).getArea()
        return abs(s_main - (s1 + s2 + s3)) < 1e-6
        
    def getCenter(self):
        """Tọa độ trọng tâm G = (A + B + C) / 3"""
        gx = (self.p1.x + self.p2.x + self.p3.x) / 3.0
        gy = (self.p1.y + self.p2.y + self.p3.y) / 3.0
        return Point2D(gx, gy)
</code></pre>

      <h2>4. Triển khai Kế thừa Quadrangle -> Rectangle -> Square</h2>
      <p><em>(Đáp ứng trọn vẹn yêu cầu file <code>BT Chuong 6a.pdf</code> và bài nộp mẫu của sinh viên)</em></p>

      <pre><code class="language-python">class Quadrangle:
    def __init__(self, p1, p2, p3, p4):
        self.p1 = p1
        self.p2 = p2
        self.p3 = p3
        self.p4 = p4
        
    def getLens(self):
        return [
            self.p1.distance_to(self.p2),
            self.p2.distance_to(self.p3),
            self.p3.distance_to(self.p4),
            self.p4.distance_to(self.p1)
        ]
        
    def getCircum(self):
        return sum(self.getLens())
        
    def getArea(self):
        """Công thức Shoelace cho tứ giác"""
        pts = [self.p1, self.p2, self.p3, self.p4]
        n = 4
        s = sum(pts[i].x * pts[(i+1)%n].y - pts[(i+1)%n].x * pts[i].y for i in range(n))
        return 0.5 * abs(s)
        
    def isParallel(self):
        """Kiểm tra hình bình hành: Vector p1->p2 == Vector p4->p3"""
        v12_x = self.p2.x - self.p1.x
        v12_y = self.p2.y - self.p1.y
        v43_x = self.p3.x - self.p4.x
        v43_y = self.p3.y - self.p4.y
        return math.isclose(v12_x, v43_x, abs_tol=1e-6) and math.isclose(v12_y, v43_y, abs_tol=1e-6)


class Rectangle(Quadrangle):
    def __init__(self, p1, p3):
        """Khởi tạo hình chữ nhật từ 2 điểm đối xứng: góc dưới trái p1 và góc trên phải p3"""
        p2 = Point2D(p3.x, p1.y)
        p4 = Point2D(p1.x, p3.y)
        super().__init__(p1, p2, p3, p4)


class Square(Rectangle):
    def __init__(self, p1, L):
        """Khởi tạo hình vuông từ điểm gốc p1 và cạnh L"""
        p3 = Point2D(p1.x + L, p1.y + L)
        super().__init__(p1, p3)
        self.L = L

# Chạy thử
sq = Square(Point2D(0, 0), 5.0)
print("Chu vi hình vuông:", sq.getCircum())  # 20.0
print("Diện tích hình vuông:", sq.getArea()) # 25.0
print("Là hình bình hành?", sq.isParallel()) # True
</code></pre>
    `
  },
  {
    id: "ch7",
    code: "CH7",
    title: "Chương 7: Tính toán số & Vẽ đồ thị (NumPy & Matplotlib)",
    tag: "Trọng tâm",
    desc: "Giải hệ phương trình cân bằng kết cấu cơ học bằng numpy.linalg, vẽ biểu đồ nội lực, subplot kỹ thuật và biểu diễn hình học polygon.",
    content: `
      <h2>1. Tại sao NumPy là chuẩn công nghiệp trong tính toán Cơ học?</h2>
      <p>NumPy lưu trữ dữ liệu dưới dạng các khối bộ nhớ liên tục trong C/Fortran (C-contiguous memory), cho phép CPU thực thi các phép toán vector hóa (SIMD - Single Instruction Multiple Data). Nhờ đó, việc nhân ma trận độ cứng $[K]$ cấp $1000 \times 1000$ diễn ra chỉ trong vài mili giây, nhanh hơn vòng lặp Python thuần từ 100 đến 300 lần!</p>

      <h2>2. Giải hệ phương trình cân bằng kết cấu $[A]\{X\} = \{B\}$</h2>
      <p>Trong cơ học kết cấu, phương trình cân bằng tĩnh học có dạng: <strong>Độ cứng $[K] \times$ Chuyển vị $\{U\} = $ Lực $\{P\}$</strong>.</p>

      <div class="mermaid">
      flowchart LR
          MatA["Ma trận độ cứng A (3x3)"] & VecB["Vector ngoại lực B (3x1)"] --> Solver["np.linalg.solve(A, B)"]
          Solver --> Result["Vector nghiệm X = A^(-1) * B"]
          Note["⚠️ Nên dùng np.linalg.solve thay vì np.linalg.inv vì solve dùng phân rã LU, nhanh hơn và tránh sai số tích lũy."]
      </div>

      <pre><code class="language-python">import numpy as np

# Cho hệ phương trình cân bằng tại các nút giàn:
#  2x +  y -  z =  9
# -5x -  y + 4z =  3
#   x - 6y + 7z = -8

A = np.array([
    [ 2,  1, -1],
    [-5, -1,  4],
    [ 1, -6,  7]
], dtype=float)

B = np.array([9, 3, -8], dtype=float)

# Cách 1: Giải trực tiếp bằng phân rã LU (Khuyến nghị chuẩn)
X_solve = np.linalg.solve(A, B)

# Cách 2: Bằng ma trận nghịch đảo A_inv @ B
A_inv = np.linalg.inv(A)
X_inv = A_inv @ B

# Tính định thức kiểm tra hệ có nghiệm duy nhất không
det_A = np.linalg.det(A)

print(f"Định thức det(A) = {det_A:.4f}")
print("Nghiệm theo np.linalg.solve:", X_solve)
print("Nghiệm theo ma trận nghịch đảo:", X_inv)
</code></pre>

      <h2>3. Matplotlib toàn diện cho Kỹ sư Cơ Kỹ Thuật</h2>
      <p>Một đồ thị báo cáo kỹ thuật chuẩn mực phải có đầy đủ: Trục tọa độ, nhãn (xlabel/ylabel), lưới (grid), chú thích (legend), tiêu đề và công thức toán học LaTeX.</p>

      <h3>Vẽ lưới đồ thị Subplot đa khung (Trích mã nguồn <code>test4.py</code> của sinh viên):</h3>
      <pre><code class="language-python">import matplotlib.pyplot as plt
import numpy as np

# Khởi tạo miền giá trị x dọc chiều dài kết cấu
x = np.arange(0, 2 * np.pi, 0.2)

plt.figure(figsize=(10, 8), dpi=100)

# Đồ thị 1: So sánh dao động y1 và y2
plt.subplot(2, 2, 1)
plt.plot(x, np.sin(x), color="b", linestyle="-", marker="^", label=r"$y_1 = \sin(x)$")
plt.plot(x, np.cos(x), color="g", linestyle="--", marker="v", label=r"$y_2 = \cos(x)$")
plt.title("Dao động điều hòa")
plt.xlabel("Thời gian t (s)")
plt.ylabel("Li độ (m)")
plt.legend()
plt.grid(True, linestyle=":")

# Đồ thị 2: Hàm parabol tải trọng
plt.subplot(2, 2, 2)
y_quad = x**2 - 3*x + 2
plt.plot(x, y_quad, color="r", linestyle="-.", marker="o")
plt.title(r"Tải trọng $q(x) = x^2 - 3x + 2$")
plt.xlabel("Vị trí x (m)")
plt.ylabel("q (kN/m)")
plt.grid(True)

# Đồ thị 3: Hàm hàm mũ e^x / (x+2)
plt.subplot(2, 2, 3)
plt.plot(x, (np.exp(x) + 1)/(x + 2), color="purple", linewidth=2)
plt.title(r"Biến dạng $f(x) = \frac{e^x + 1}{x + 2}$")
plt.grid(True)

# Đồ thị 4: Biểu đồ phân bố ứng suất cực đại
plt.subplot(2, 2, 4)
plt.plot(x, np.cos(x) - 1, color="black", marker="s", markersize=4)
plt.title(r"Độ võng $w(x) = \cos(x) - 1$")
plt.grid(True)

plt.tight_layout()
plt.show()
</code></pre>

      <h2>4. Vẽ hình học nâng cao: Logo Bách Khoa TP.HCM bằng Matplotlib Polygon</h2>
      <p><em>(Trích bài thực hành nâng cao <code>test7.py</code>)</em></p>
      <pre><code class="language-python">import matplotlib.pyplot as plt
import numpy as np
from matplotlib.patches import Polygon

DARK_BLUE = "#030391"
LIGHT_BLUE = "#1488D8"

angles = np.pi / 2 - np.arange(6) * (np.pi / 3)
V = np.column_stack((np.cos(angles), np.sin(angles)))

fig, ax = plt.subplots(figsize=(6, 6), dpi=120)
ax.set_facecolor("white")

for k in [0, 2, 4]:
    v_prev = V[(k - 1) % 6]
    v_curr = V[k]
    v_next = V[(k + 1) % 6]

    # Các khối hình thoi màu tối và sáng
    rhombus_dark = np.array([v_prev, v_curr, 2 * v_curr, v_prev + v_curr])
    ax.add_patch(Polygon(rhombus_dark, closed=True, facecolor=DARK_BLUE, edgecolor="none"))

    rhombus_light = np.array([v_curr, v_next, v_next + v_curr, 2 * v_curr])
    ax.add_patch(Polygon(rhombus_light, closed=True, facecolor=LIGHT_BLUE, edgecolor="none"))

# Lõi lục giác trung tâm màu trắng
ax.add_patch(Polygon(V, closed=True, facecolor="white", edgecolor="none"))

ax.text(0, 0.12, "BK", fontfamily="Arial", fontweight="bold", fontsize=70, color=DARK_BLUE, ha="center", va="center")
ax.text(0, -0.42, "TP.HCM", fontfamily="Arial", fontweight="bold", fontsize=26, color=LIGHT_BLUE, ha="center", va="center")

ax.set_aspect("equal")
ax.set_xlim(-2.2, 2.2)
ax.set_ylim(-2.0, 2.3)
ax.axis("off")
plt.title("Biểu trưng Bách Khoa dựng bằng Matplotlib", fontsize=12)
plt.show()
</code></pre>
    `
  },
  {
    id: "ch8",
    code: "CH8",
    title: "Chương 8: Lập trình Giao diện Đồ họa (GUI với Tkinter)",
    tag: "Ứng dụng",
    desc: "Xây dựng ứng dụng phần mềm kỹ thuật hoàn chỉnh: nhập tải trọng, giải bài toán kết cấu, đồng bộ biến giao diện với StringVar/DoubleVar.",
    content: `
      <h2>1. Kiến trúc ứng dụng GUI với Tkinter</h2>
      <p>Tkinter là thư viện chuẩn đi kèm sẵn trong Python để xây dựng ứng dụng cửa sổ Desktop. Khác với script chạy từ đầu đến đuôi trên console, ứng dụng GUI hoạt động theo mô hình <strong>Event-driven (Lập trình hướng sự kiện)</strong>:</p>

      <div class="mermaid">
      flowchart TD
          Init["Khởi tạo: root = tk.Tk()"] --> Widgets["Tạo Widgets: Label, Entry, Button"]
          Widgets --> Layout["Bố trí giao diện: .grid() hoặc .pack()"]
          Layout --> Loop["Vòng lặp sự kiện: root.mainloop()"]
          Loop -- "Chờ người dùng gõ phím / bấm chuột" --> Event["Sự kiện click: gọi hàm command=calc()"]
          Event --> Update["Cập nhật kết quả lên Label / Canvas"]
          Update --> Loop
      </div>

      <h2>2. Các Widget cơ bản và Quản lý Layout bằng <code>grid()</code></h2>
      <ul>
        <li><code>Label</code>: Nhãn hiển thị thông báo, tên thông số.</li>
        <li><code>Entry</code>: Hộp cho người dùng nhập số liệu.</li>
        <li><code>Button</code>: Nút bấm kích hoạt hành động tính toán.</li>
        <li><code>StringVar</code> / <code>DoubleVar</code>: Biến trung gian giúp tự động đồng bộ dữ liệu giữa logic code và giao diện (Two-way binding).</li>
        <li><code>grid(row=..., column=..., padx=..., pady=...)</code>: Bố trí các widget theo dạng lưới hàng và cột khoa học.</li>
      </ul>

      <h2>3. Ứng dụng hoàn chỉnh: Phần mềm Tính toán Dầm Đơn Giản Chịu Lực Tập Trung</h2>
      <p>Một phần mềm kỹ thuật thực tế cho phép nhập: Chiều dài dầm $L$ (m), vị trí đặt lực $a$ (m), độ lớn lực $P$ (kN). Chương trình tính và xuất:</p>
      <ul>
        <li>Phản lực tại gối tựa $A$: $R_A = P \cdot (L - a) / L$</li>
        <li>Phản lực tại gối tựa $B$: $R_B = P \cdot a / L$</li>
        <li>Mô men uốn cực đại tại điểm đặt lực: $M_{max} = R_A \cdot a$</li>
      </ul>

      <pre><code class="language-python">import tkinter as tk
from tkinter import messagebox

def tinh_toan_dam():
    try:
        L = float(entry_L.get())
        P = float(entry_P.get())
        a = float(entry_a.get())
        
        if L <= 0 or P <= 0:
            messagebox.showerror("Lỗi dữ liệu", "Chiều dài dầm L và tải trọng P phải > 0!")
            return
        if a < 0 or a > L:
            messagebox.showerror("Lỗi vị trí", f"Vị trí đặt lực 'a' phải nằm trong đoạn [0, {L}] m!")
            return
            
        # Công thức cơ học kết cấu
        RA = P * (L - a) / L
        RB = P * a / L
        M_max = RA * a
        
        # Cập nhật kết quả lên giao diện
        var_RA.set(f"{RA:.3f} kN")
        var_RB.set(f"{RB:.3f} kN")
        var_Mmax.set(f"{M_max:.3f} kNm")
        
    except ValueError:
        messagebox.showerror("Lỗi định dạng", "Vui lòng chỉ nhập số hợp lệ!")

# Khởi tạo cửa sổ chính
root = tk.Tk()
root.title("Phần mềm Tính toán Dầm Đơn giản - ĐHBK TP.HCM")
root.geometry("450x320")
root.resizable(False, False)

# Tiêu đề
lbl_title = tk.Label(root, text="TÍNH PHẢN LỰC & MÔ MEN UỐN DẦM", font=("Arial", 13, "bold"), fg="#030391")
lbl_title.grid(row=0, column=0, columnspan=2, pady=15)

# Các ô nhập liệu
tk.Label(root, text="Chiều dài dầm L (m):").grid(row=1, column=0, sticky="e", padx=10, pady=5)
entry_L = tk.Entry(root, width=15)
entry_L.grid(row=1, column=1, sticky="w", padx=10, pady=5)
entry_L.insert(0, "6.0")

tk.Label(root, text="Tải trọng tập trung P (kN):").grid(row=2, column=0, sticky="e", padx=10, pady=5)
entry_P = tk.Entry(root, width=15)
entry_P.grid(row=2, column=1, sticky="w", padx=10, pady=5)
entry_P.insert(0, "20.0")

tk.Label(root, text="Vị trí đặt lực a (m):").grid(row=3, column=0, sticky="e", padx=10, pady=5)
entry_a = tk.Entry(root, width=15)
entry_a.grid(row=3, column=1, sticky="w", padx=10, pady=5)
entry_a.insert(0, "2.0")

# Nút tính toán
btn_calc = tk.Button(root, text="TÍNH TOÁN NGAY", bg="#1488D8", fg="white", font=("Arial", 10, "bold"), command=tinh_toan_dam, padx=15, pady=5)
btn_calc.grid(row=4, column=0, columnspan=2, pady=15)

# Hiển thị kết quả
var_RA = tk.StringVar(value="--")
var_RB = tk.StringVar(value="--")
var_Mmax = tk.StringVar(value="--")

tk.Label(root, text="Phản lực tại gối A (RA):", font=("Arial", 10, "bold")).grid(row=5, column=0, sticky="e", padx=10, pady=3)
tk.Label(root, textvariable=var_RA, fg="#d9534f", font=("Arial", 10, "bold")).grid(row=5, column=1, sticky="w", padx=10, pady=3)

tk.Label(root, text="Phản lực tại gối B (RB):", font=("Arial", 10, "bold")).grid(row=6, column=0, sticky="e", padx=10, pady=3)
tk.Label(root, textvariable=var_RB, fg="#d9534f", font=("Arial", 10, "bold")).grid(row=6, column=1, sticky="w", padx=10, pady=3)

tk.Label(root, text="Mô men uốn lớn nhất (Mmax):", font=("Arial", 10, "bold")).grid(row=7, column=0, sticky="e", padx=10, pady=3)
tk.Label(root, textvariable=var_Mmax, fg="#28a745", font=("Arial", 11, "bold")).grid(row=7, column=1, sticky="w", padx=10, pady=3)

root.mainloop()
</code></pre>
    `
  }
];
