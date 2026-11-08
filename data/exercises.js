/**
 * NGÂN HÀNG BÀI TẬP & LỜI GIẢI CHI TIẾT (100% BÁM SÁT GIÁO TRÌNH VÀ ĐỀ THI)
 * Môn: Lập trình Cơ Kỹ Thuật - ĐH Bách Khoa TP.HCM
 */

window.EXERCISES_DATA = [
  // ========================== CHƯƠNG 2 ==========================
  {
    id: "ex_ch2_01",
    chapter: "ch2_3",
    chapterTitle: "Chương 2 & 3",
    title: "Bài 2.1: Tính diện tích hình vành khăn",
    level: "Dễ",
    problem: "Viết đoạn chương trình tính diện tích hình vành khăn giới hạn bởi 2 bán kính $R_1$ và $R_2$ ($R_1 > R_2 > 0$) do người dùng nhập vào từ bàn phím.",
    analysis: "Diện tích vành khăn: $S = \\pi (R_1^2 - R_2^2)$. Cần kiểm tra điều kiện $R_1 > R_2 > 0$ trước khi tính.",
    flowchart: `
flowchart TD
    Start(["Bắt đầu"]) --> In["Nhập R1, R2"]
    In --> Check{"R1 > R2<br>và R2 > 0?"}
    Check -- "Sai" --> Err["Báo lỗi: Bán kính không hợp lệ"] --> End(["Kết thúc"])
    Check -- "Đúng" --> Calc["S = pi * (R1^2 - R2^2)"]
    Calc --> Out["In diện tích S"] --> End
    `,
    solution: `import math

def dien_tich_vanh_khan():
    r1 = float(input("Nhập bán kính ngoài R1: "))
    r2 = float(input("Nhập bán kính trong R2: "))
    
    if r1 <= 0 or r2 <= 0:
        print("Lỗi: Bán kính phải là số dương!")
        return
    if r1 <= r2:
        print("Lỗi: Bán kính ngoài R1 phải lớn hơn bán kính trong R2!")
        return
        
    s = math.pi * (r1**2 - r2**2)
    print(f"Diện tích hình vành khăn: S = {s:.4f}")

dien_tich_vanh_khan()`,
    notes: "Luôn dùng math.pi thay vì gán cứng 3.14 để đảm bảo độ chính xác tính toán kỹ thuật."
  },
  {
    id: "ex_ch2_02",
    chapter: "ch2_3",
    chapterTitle: "Chương 2 & 3",
    title: "Bài 2.2: Khoảng cách từ điểm đến mặt phẳng 3D",
    level: "Trung bình",
    problem: "Viết chương trình xác định khoảng cách $h$ từ điểm $M(x_0, y_0, z_0)$ đến mặt phẳng $(P): Ax + By + Cz + D = 0$.",
    analysis: "Công thức hình học giải tích không gian: $h = \\frac{|A x_0 + B y_0 + C z_0 + D|}{\\sqrt{A^2 + B^2 + C^2}}$.",
    flowchart: `
flowchart TD
    Start(["Bắt đầu"]) --> In["Nhập tọa độ M(x0, y0, z0) và tham số (A, B, C, D)"]
    In --> CheckNorm{"A^2 + B^2 + C^2<br>== 0?"}
    CheckNorm -- "Đúng" --> Err["Mặt phẳng không hợp lệ"] --> End(["Kết thúc"])
    CheckNorm -- "Sai" --> Calc["h = |Ax0 + By0 + Cz0 + D| / sqrt(A^2 + B^2 + C^2)"]
    Calc --> Out["In khoảng cách h"] --> End
    `,
    solution: `import math

def khoang_cach_diem_den_mp():
    print("Nhập tọa độ điểm M(x0, y0, z0):")
    x0, y0, z0 = map(float, input().split())
    
    print("Nhập các tham số mặt phẳng (P): A, B, C, D:")
    A, B, C, D = map(float, input().split())
    
    mau = math.sqrt(A**2 + B**2 + C**2)
    if mau < 1e-9:
        print("Lỗi: Vector pháp tuyến (A, B, C) không thể bằng vector 0!")
        return
        
    tu = abs(A*x0 + B*y0 + C*z0 + D)
    h = tu / mau
    print(f"Khoảng cách từ M đến mặt phẳng (P) là: h = {h:.4f}")

khoang_cach_diem_den_mp()`,
    notes: "Bài toán thường gặp trong tính toán tọa độ không gian kết cấu giàn không gian 3D."
  },

  // ========================== CHƯƠNG 3 ==========================
  {
    id: "ex_ch3_01",
    chapter: "ch2_3",
    chapterTitle: "Chương 2 & 3",
    title: "Bài 3.1: Phân tích độ võng dọc dầm chịu uốn",
    level: "Trung bình",
    problem: "Độ võng f (mm) đo tại 10 điểm cách đều trên dầm dài L = 9 m: [0.0, 2.1, 5.4, 8.2, 9.5, 9.1, 6.8, 3.2, 1.1, 0.0]. Yêu cầu: 1. Tìm độ võng cực đại f_max và vị trí x tương ứng. 2. Lọc danh sách các vị trí có độ võng vượt quá giới hạn cho phép [f] = 5.0 mm.",
    analysis: "Dùng các thao tác List: duyệt chỉ số với enumerate, tìm max(), tính tọa độ x_i = i * (L / (N - 1)).",
    flowchart: `
flowchart TD
    Start(["Bắt đầu"]) --> Init["Khởi tạo danh sách f và L = 9.0m, N = 10"]
    Init --> Step["Khoảng cách nút: dx = L / (N - 1)"]
    Step --> FindMax["f_max = max(f), idx_max = f.index(f_max)"]
    FindMax --> Filter["Duyệt list f: gom các điểm có f[i] > 5.0 mm"]
    Filter --> Out["In f_max, vị trí x_max và danh sách điểm nguy hiểm"] --> End(["Kết thúc"])
    `,
    solution: `def phan_tich_do_vong():
    f = [0.0, 2.1, 5.4, 8.2, 9.5, 9.1, 6.8, 3.2, 1.1, 0.0]
    L = 9.0
    n = len(f)
    dx = L / (n - 1)
    
    # 1. Tìm độ võng lớn nhất
    f_max = max(f)
    idx_max = f.index(f_max)
    x_max = idx_max * dx
    print(f"1. Độ võng lớn nhất: f_max = {f_max} mm tại x = {x_max:.2f} m")
    
    # 2. Lọc các điểm vượt ngưỡng 5.0 mm
    gioi_han = 5.0
    nguy_hiem = []
    for i, val in enumerate(f):
        if val > gioi_han:
            x_i = i * dx
            nguy_hiem.append((i, x_i, val))
            
    print(f"2. Các vị trí có độ võng vượt quá {gioi_han} mm:")
    for idx, x_val, defl in nguy_hiem:
        print(f"   - Nút {idx} (x = {x_val:.2f} m): f = {defl} mm")

phan_tich_do_vong()`,
    notes: "Bài toán thực tế trong môn Sức bền vật liệu và Thí nghiệm công trình."
  },

  // ========================== CHƯƠNG 4 ==========================
  {
    id: "ex_ch4_01",
    chapter: "ch4",
    chapterTitle: "Chương 4",
    title: "Bài 4.1: Kiểm tra điểm D thuộc tam giác ABC",
    level: "Nâng cao",
    problem: "Cho tọa độ 3 đỉnh A, B, C của tam giác và tọa độ điểm D. Kiểm tra xem điểm D có thuộc tam giác ABC hay không?",
    analysis: "Áp dụng định lý diện tích: D thuộc tam giác ABC khi và chỉ khi S(ABC) = S(DAB) + S(DBC) + S(DCA). So sánh bằng ngưỡng sai số abs(S_ABC - sum_S) < 1e-6 để tránh lỗi số thực.",
    flowchart: `
flowchart TD
    Start(["Bắt đầu"]) --> In["Nhập tọa độ A, B, C và D"]
    In --> S_ABC["Tính diện tích S_ABC qua tọa độ"]
    S_ABC --> CheckDeg{"S_ABC < 1e-9?"}
    CheckDeg -- "Đúng" --> Err["A, B, C thẳng hàng"] --> End(["Kết thúc"])
    CheckDeg -- "Sai" --> S_subs["Tính S_DAB, S_DBC, S_DCA"]
    S_subs --> Diff["sai_so = |S_ABC - (S_DAB + S_DBC + S_DCA)|"]
    Diff --> CheckIn{"sai_so < 1e-6?"}
    CheckIn -- "Đúng" --> OutTrue["D NẰM TRONG tam giác ABC"] --> End
    CheckIn -- "Sai" --> OutFalse["D NẰM NGOÀI tam giác ABC"] --> End
    `,
    solution: `def dien_tich_shoelace(x1, y1, x2, y2, x3, y3):
    return 0.5 * abs(x1*(y2 - y3) + x2*(y3 - y1) + x3*(y1 - y2))

def kiem_tra_diem_trong_tam_giac():
    xA, yA = map(float, input("Nhập tọa độ A (x y): ").split())
    xB, yB = map(float, input("Nhập tọa độ B (x y): ").split())
    xC, yC = map(float, input("Nhập tọa độ C (x y): ").split())
    xD, yD = map(float, input("Nhập tọa độ D (x y): ").split())
    
    s_ABC = dien_tich_shoelace(xA, yA, xB, yB, xC, yC)
    if s_ABC < 1e-9:
        print("Lỗi: 3 điểm A, B, C không tạo thành tam giác!")
        return
        
    s_DAB = dien_tich_shoelace(xD, yD, xA, yA, xB, yB)
    s_DBC = dien_tich_shoelace(xD, yD, xB, yB, xC, yC)
    s_DCA = dien_tich_shoelace(xD, yD, xC, yC, xA, yA)
    
    sum_con = s_DAB + s_DBC + s_DCA
    if abs(s_ABC - sum_con) < 1e-6:
        print(f"✅ Điểm D({xD}, {yD}) NẰM TRONG tam giác ABC.")
    else:
        print(f"❌ Điểm D({xD}, {yD}) NẰM NGOÀI tam giác ABC.")

kiem_tra_diem_trong_tam_giac()`,
    notes: "Một trong những thuật toán nền tảng của phương pháp Phần tử hữu hạn (FEM) khi xác định điểm nạp tải thuộc phần tử nào."
  },
  {
    id: "ex_ch4_02",
    chapter: "ch4",
    chapterTitle: "Chương 4",
    title: "Bài 4.2: Chuyển đổi nhiệt độ C sang F và ngược lại",
    level: "Dễ",
    problem: "Người dùng nhập vào nhiệt độ có đuôi 'C' hoặc 'F' (VD: 50F, 100C, 78.5F). Đổi F sang C theo công thức C = (F - 32) * 5/9 và ngược lại F = C * 9/5 + 32.",
    analysis: "Dùng slicing chuỗi: s[-1].upper() để lấy đơn vị, s[:-1] để ép sang float.",
    flowchart: `
flowchart TD
    Start(["Bắt đầu"]) --> In["Nhập chuỗi temp_str (vd: '100C')"]
    In --> Unit["unit = temp_str[-1], val = float(temp_str[:-1])"]
    Unit --> Check{"unit == 'C'<br>hay 'F'?"}
    Check -- "C" --> ToF["F = val * 9/5 + 32<br>In nhiệt độ theo F"] --> End(["Kết thúc"])
    Check -- "F" --> ToC["C = (val - 32) * 5/9<br>In nhiệt độ theo C"] --> End
    Check -- "Khác" --> Err["Định dạng không hợp lệ"] --> End
    `,
    solution: `def doi_nhiet_do():
    s = input("Nhập nhiệt độ (vd: 100C hoặc 50F): ").strip()
    unit = s[-1].upper()
    try:
        val = float(s[:-1])
    except ValueError:
        print("Giá trị số không hợp lệ!")
        return
        
    if unit == 'C':
        f = val * 9/5 + 32
        print(f"The temperature in Fahrenheit is {f:.1f} degrees.")
    elif unit == 'F':
        c = (val - 32) * 5/9
        print(f"The temperature in Celsius is {c:.1f} degrees.")
    else:
        print("Đơn vị phải là 'C' hoặc 'F'!")

doi_nhiet_do()`,
    notes: "Bài tập 2 trong file BT Chương 4 của bộ môn."
  },

  // ========================== CHƯƠNG 5 ==========================
  {
    id: "ex_ch5_01",
    chapter: "ch5",
    chapterTitle: "Chương 5",
    title: "Bài 5.1: Xây dựng Module Ma trận hoàn chỉnh (matrixEM.py)",
    level: "Đề thi",
    problem: "Viết module matrixEM.py gồm các hàm: cộng ma trận, nhân 2 ma trận bất kỳ, trích xuất ma trận con và tính định thức ma trận vuông cấp $n$ bằng đệ quy.",
    analysis: "Khai triển Laplace theo dòng 0: $\\det(A) = \\sum_{j=0}^{n-1} (-1)^j A_{0j} \\det(M_{0j})$. Trường hợp dừng của đệ quy là $n=1$ hoặc $n=2$.",
    flowchart: `
flowchart TD
    Start(["determinant(A)"]) --> CheckN{"Kích thước n?"}
    CheckN -- "n == 1" --> Ret1["Trả về A[0][0]"]
    CheckN -- "n == 2" --> Ret2["Trả về A[0][0]*A[1][1] - A[0][1]*A[1][0]"]
    CheckN -- "n > 2" --> Loop["Duyệt từng cột j = 0 đến n-1:<br>1. Lấy ma trận con sub_j (bỏ hàng 0, cột j)<br>2. det += (-1)^j * A[0][j] * determinant(sub_j)"]
    Loop --> RetN["Trả về det"]
    `,
    solution: `# File: matrixEM.py

def add_matrix(A, B):
    m, n = len(A), len(A[0])
    return [[A[i][j] + B[i][j] for j in range(n)] for i in range(m)]

def multiply_matrix(A, B):
    m, n = len(A), len(A[0])
    n_b, p = len(B), len(B[0])
    if n != n_b:
        raise ValueError("Số cột của A phải bằng số hàng của B!")
    C = [[0.0] * p for _ in range(m)]
    for i in range(m):
        for j in range(p):
            C[i][j] = sum(A[i][k] * B[k][j] for k in range(n))
    return C

def get_submatrix(A, rem_r, rem_c):
    return [
        [val for c_idx, val in enumerate(row) if c_idx != rem_c]
        for r_idx, row in enumerate(A) if r_idx != rem_r
    ]

def determinant(A):
    n = len(A)
    if n == 1:
        return A[0][0]
    if n == 2:
        return A[0][0] * A[1][1] - A[0][1] * A[1][0]
    det = 0.0
    for j in range(n):
        sign = (-1) ** j
        sub = get_submatrix(A, 0, j)
        det += sign * A[0][j] * determinant(sub)
    return det

if __name__ == "__main__":
    M = [
        [2, 1, -1],
        [-5, -1, 4],
        [1, -6, 7]
    ]
    print("Định thức ma trận M cấp 3x3 =", determinant(M))`,
    notes: "Yêu cầu cốt lõi bài tập 21 trong BT Chương 5."
  },
  {
    id: "ex_ch5_02",
    chapter: "ch5",
    chapterTitle: "Chương 5",
    title: "Bài 5.2: Xấp xỉ tích phân hình thang cho tải trọng phân bố",
    level: "Nâng cao",
    problem: "Viết hàm tính xấp xỉ tích phân $I = \\int_{x_1}^{x_2} (ax^2 + bx + c) dx$ bằng công thức hình thang với số khoảng chia $n$. So sánh với nghiệm giải tích chính xác.",
    analysis: "Công thức hình thang: $I \\approx h \\left[ \\frac{f(a) + f(b)}{2} + \\sum_{i=1}^{n-1} f(x_i) \\right]$. Nghiệm giải tích: $F(x) = \\frac{a x^3}{3} + \\frac{b x^2}{2} + c x$.",
    flowchart: `
flowchart TD
    Start(["Bắt đầu"]) --> In["f(x) = ax^2 + bx + c, [x1, x2], n"]
    In --> Step["h = (x2 - x1) / n"]
    Step --> Init["sum_val = 0.5 * (f(x1) + f(x2))"]
    Init --> Loop["For i từ 1 đến n-1:<br>sum_val += f(x1 + i*h)"]
    Loop --> Result["I = sum_val * h"]
    Result --> Exact["Tính F(x2) - F(x1) giải tích"]
    Exact --> Out["In giá trị xấp xỉ và sai số tuyệt đối"] --> End(["Kết thúc"])
    `,
    solution: `def tich_phan_hinh_thang(a, b, c, x1, x2, n=1000):
    f = lambda x: a*(x**2) + b*x + c
    h = (x2 - x1) / n
    tong = 0.5 * (f(x1) + f(x2))
    for i in range(1, n):
        tong += f(x1 + i * h)
    I_approx = tong * h
    
    # Giải tích chính xác: Nguyên hàm F(x) = a*x^3/3 + b*x^2/2 + c*x
    F = lambda x: (a * x**3) / 3.0 + (b * x**2) / 2.0 + c * x
    I_exact = F(x2) - F(x1)
    
    sai_so = abs(I_approx - I_exact)
    return I_approx, I_exact, sai_so

# Tính tích phân f(x) = 2x^2 - 3x + 5 từ 0 đến 6
approx, exact, err = tich_phan_hinh_thang(2, -3, 5, 0, 6, n=500)
print(f"Tích phân xấp xỉ: {approx:.6f}")
print(f"Giải tích chính xác: {exact:.6f}")
print(f"Sai số tuyệt đối: {err:.2e}")`,
    notes: "Dùng để tính hợp lực phân bố và tọa độ trọng tâm biểu đồ nội lực."
  },

  // ========================== CHƯƠNG 6 ==========================
  {
    id: "ex_ch6_01",
    chapter: "ch6",
    chapterTitle: "Chương 6",
    title: "Bài 6.1: Hệ thống Lớp Tam giác toàn diện (Class Triangle)",
    level: "Đề thi",
    problem: "Xây dựng class Point2D và class Triangle với đầy đủ các phương thức: lấy độ dài 3 cạnh, kiểm tra tam giác đều/cân/vuông, tính chu vi, diện tích và tọa độ trọng tâm.",
    analysis: "Sử dụng math.hypot tính cạnh, math.isclose để kiểm tra tam giác đều/vuông cân nhằm tránh sai số số thực float.",
    flowchart: `
flowchart TD
    InitP["Tạo Point2D(x, y)"] --> InitTri["Tạo Triangle(p1, p2, p3)"]
    InitTri --> Lens["getLens() -> [a, b, c]"]
    Lens --> Props{"Kiểm tra dạng tam giác?"}
    Props --> Equ["isEquTri: a == b == c"]
    Props --> Iso["isIsoTri: a == b or b == c or c == a"]
    Props --> Right["isRigAngTri: a^2 + b^2 == c^2 (Pytago)"]
    InitTri --> Area["getArea() theo Shoelace hoặc Heron"]
    InitTri --> Center["getCenter() -> Point2D((x1+x2+x3)/3, (y1+y2+y3)/3)"]
    `,
    solution: `import math

class Point2D:
    def __init__(self, x=0.0, y=0.0):
        self.x = float(x)
        self.y = float(y)
    
    def distance_to(self, other):
        return math.hypot(self.x - other.x, self.y - other.y)
    
    def __repr__(self):
        return f"({self.x:.2f}, {self.y:.2f})"

class Triangle:
    def __init__(self, p1, p2, p3):
        self.p1 = p1
        self.p2 = p2
        self.p3 = p3
        if self.getArea() < 1e-8:
            raise ValueError("3 điểm không tạo thành tam giác hợp lệ!")
            
    def getLens(self):
        a = self.p2.distance_to(self.p3)
        b = self.p3.distance_to(self.p1)
        c = self.p1.distance_to(self.p2)
        return [a, b, c]
        
    def getCircum(self):
        return sum(self.getLens())
        
    def getArea(self):
        x1, y1 = self.p1.x, self.p1.y
        x2, y2 = self.p2.x, self.p2.y
        x3, y3 = self.p3.x, self.p3.y
        return 0.5 * abs(x1*(y2 - y3) + x2*(y3 - y1) + x3*(y1 - y2))
        
    def isEquTri(self):
        a, b, c = self.getLens()
        return math.isclose(a, b, abs_tol=1e-5) and math.isclose(b, c, abs_tol=1e-5)
        
    def isRigAngTri(self):
        s = sorted(self.getLens())
        return math.isclose(s[0]**2 + s[1]**2, s[2]**2, abs_tol=1e-5)
        
    def getCenter(self):
        gx = (self.p1.x + self.p2.x + self.p3.x) / 3.0
        gy = (self.p1.y + self.p2.y + self.p3.y) / 3.0
        return Point2D(gx, gy)

# Chạy thử
t = Triangle(Point2D(0, 0), Point2D(4, 0), Point2D(0, 3))
print("Độ dài các cạnh:", t.getLens())
print("Chu vi:", t.getCircum())
print("Diện tích:", t.getArea())
print("Là tam giác vuông?", t.isRigAngTri())
print("Trọng tâm G:", t.getCenter())`,
    notes: "Yêu cầu bài 2 trong BT Chương 6a."
  },
  {
    id: "ex_ch6_02",
    chapter: "ch6",
    chapterTitle: "Chương 6",
    title: "Bài 6.2: Kế thừa Quadrangle -> Rectangle -> Square",
    level: "Đề thi",
    problem: "Xây dựng lớp tứ giác Quadrangle(p1, p2, p3, p4), sau đó cho lớp Rectangle kế thừa từ Quadrangle nhận 2 điểm đối diện (dưới-trái và trên-phải), và lớp Square kế thừa từ Rectangle nhận 1 điểm và cạnh L.",
    analysis: "Áp dụng kỹ thuật super().__init__() để tái sử dụng logic tính toán diện tích Shoelace và chu vi của lớp cha.",
    flowchart: `
flowchart TD
    Quad["Class Quadrangle(p1, p2, p3, p4)<br>Shoelace Area, getLens(), isParallel()"]
    Quad --> Rec["Class Rectangle(p1, p3)<br>Tự suy ra p2, p4 -> super().__init__"]
    Rec --> Sq["Class Square(p1, L)<br>Tự suy ra p3 = p1 + L -> super().__init__"]
    `,
    solution: `import math

class Point2D:
    def __init__(self, x=0.0, y=0.0):
        self.x = float(x)
        self.y = float(y)
    def distance_to(self, other):
        return math.hypot(self.x - other.x, self.y - other.y)

class Quadrangle:
    def __init__(self, p1, p2, p3, p4):
        self.p1, self.p2, self.p3, self.p4 = p1, p2, p3, p4
        
    def getLens(self):
        return [
            self.p1.distance_to(self.p2),
            self.p2.distance_to(self.p3),
            self.p3.distance_to(self.p4),
            self.p4.distance_to(self.p1)
        ]
        
    def getArea(self):
        pts = [self.p1, self.p2, self.p3, self.p4]
        s = sum(pts[i].x * pts[(i+1)%4].y - pts[(i+1)%4].x * pts[i].y for i in range(4))
        return 0.5 * abs(s)
        
    def getCircum(self):
        return sum(self.getLens())

class Rectangle(Quadrangle):
    def __init__(self, p1, p3):
        p2 = Point2D(p3.x, p1.y)
        p4 = Point2D(p1.x, p3.y)
        super().__init__(p1, p2, p3, p4)

class Square(Rectangle):
    def __init__(self, p1, L):
        p3 = Point2D(p1.x + L, p1.y + L)
        super().__init__(p1, p3)
        self.L = L

# Kiểm thử
sq = Square(Point2D(1, 1), 4.0)
print("Chu vi hình vuông cạnh 4:", sq.getCircum()) # 16.0
print("Diện tích hình vuông cạnh 4:", sq.getArea()) # 16.0`,
    notes: "Cốt lõi bài 4 & 5 trong BT Chương 6a."
  },

  // ========================== CHƯƠNG 7 ==========================
  {
    id: "ex_ch7_01",
    chapter: "ch7",
    chapterTitle: "Chương 7",
    title: "Bài 7.1: Giải hệ phương trình cân bằng kết cấu và tính số điều kiện",
    level: "Nâng cao",
    problem: "Cho hệ phương trình cân bằng nút: [A]{X} = {B} với ma trận A (3x3). Hãy giải hệ bằng 2 phương pháp: 1. np.linalg.solve; 2. Ma trận nghịch đảo np.linalg.inv. Đánh giá số điều kiện cond(A) để kiểm tra độ nhạy của hệ kết cấu.",
    analysis: "Số điều kiện cond(A) = ||A|| * ||A^-1||. Nếu cond(A) quá lớn (ill-conditioned matrix), hệ kết cấu rất nhạy cảm với sai số và gần trạng thái mất ổn định (biến hình).",
    flowchart: `
flowchart TD
    Start(["Bắt đầu"]) --> In["Khởi tạo mảng A (3x3) và vector B (3x1)"]
    In --> Det["Tính det = np.linalg.det(A)"]
    Det --> CheckDet{"abs(det) < 1e-9?"}
    CheckDet -- "Đúng" --> Err["Hệ biến hình / Ma trận suy biến"] --> End(["Kết thúc"])
    CheckDet -- "Sai" --> Solve1["x_solve = np.linalg.solve(A, B)"]
    Solve1 --> Solve2["x_inv = np.linalg.inv(A) @ B"]
    Solve2 --> Cond["cond_num = np.linalg.cond(A)"]
    Cond --> Out["In nghiệm và số điều kiện"] --> End
    `,
    solution: `import numpy as np

A = np.array([
    [ 2.0,  1.0, -1.0],
    [-5.0, -1.0,  4.0],
    [ 1.0, -6.0,  7.0]
])

B = np.array([9.0, 3.0, -8.0])

# 1. Giải bằng solve (LU decomposition)
X_solve = np.linalg.solve(A, B)

# 2. Giải bằng ma trận nghịch đảo
A_inv = np.linalg.inv(A)
X_inv = A_inv @ B

# 3. Đánh giá số điều kiện
cond = np.linalg.cond(A)

print("Nghiệm theo np.linalg.solve:     ", np.round(X_solve, 4))
print("Nghiệm theo ma trận nghịch đảo: ", np.round(X_inv, 4))
print(f"Số điều kiện cond(A) = {cond:.2f}")
if cond < 100:
    print("-> Ma trận ổn định, kết quả tính toán có độ tin cậy cao.")
else:
    print("-> Cảnh báo: Ma trận xấu (ill-conditioned), nhạy cảm với sai số.")`,
    notes: "Trích mã nguồn test1.py trong thư mục thực hành TEST của sinh viên."
  },

  // ========================== CHƯƠNG 8 ==========================
  {
    id: "ex_ch8_01",
    chapter: "ch8",
    chapterTitle: "Chương 8",
    title: "Bài 8.1: Phần mềm GUI kiểm tra tam giác & tính diện tích",
    level: "Đề thi",
    problem: "Viết ứng dụng Tkinter có các ô nhập độ dài 3 cạnh a, b, c. Khi bấm nút 'Kiểm tra & Tính toán': 1. Kiểm tra 3 cạnh có tạo thành tam giác không. 2. Phân loại tam giác (đều, vuông, cân, thường). 3. Xuất chu vi và diện tích lên nhãn kết quả.",
    analysis: "Sử dụng tk.Entry để nhập liệu, tk.StringVar để hiển thị động, và bắt ngoại lệ ValueError nếu người dùng nhập chữ.",
    flowchart: `
flowchart TD
    GUI["Cửa sổ Tkinter: 3 Entry a, b, c & Button Tính toán"]
    GUI --> Click["Người dùng bấm nút -> gọi hàm xu_ly()"]
    Click --> CheckVal{"Đọc float(a, b, c)<br>thành công?"}
    CheckVal -- "Sai" --> Err1["messagebox.showerror('Lỗi', 'Vui lòng nhập số!')"]
    CheckVal -- "Đúng" --> CheckIneq{"Thỏa mãn BĐT<br>tam giác?"}
    CheckIneq -- "Sai" --> Err2["Cập nhật: Không phải tam giác hợp lệ"]
    CheckIneq -- "Đúng" --> Calc["Tính Chu vi, Diện tích Heron, Phân loại"]
    Calc --> Update["Cập nhật kết quả lên StringVar"]
    `,
    solution: `import tkinter as tk
from tkinter import messagebox
import math

def tinh_tam_giac():
    try:
        a = float(entry_a.get())
        b = float(entry_b.get())
        c = float(entry_c.get())
        
        if a <= 0 or b <= 0 or c <= 0:
            var_kq.set("Cả 3 cạnh phải là số dương!")
            return
            
        if a + b <= c or b + c <= a or c + a <= b:
            var_kq.set("Ba cạnh không thỏa bất đẳng thức tam giác!")
            return
            
        # Chu vi & Diện tích
        p = (a + b + c) / 2.0
        s = math.sqrt(p * (p - a) * (p - b) * (p - c))
        
        # Phân loại
        side = sorted([a, b, c])
        x, y, z = side[0], side[1], side[2]
        is_equ = math.isclose(x, y, abs_tol=1e-5) and math.isclose(y, z, abs_tol=1e-5)
        is_right = math.isclose(x**2 + y**2, z**2, abs_tol=1e-5)
        is_iso = math.isclose(x, y, abs_tol=1e-5) or math.isclose(y, z, abs_tol=1e-5)
        
        if is_equ:
            loai = "Tam giác ĐỀU"
        elif is_right and is_iso:
            loai = "Tam giác VUÔNG CÂN"
        elif is_right:
            loai = "Tam giác VUÔNG"
        elif is_iso:
            loai = "Tam giác CÂN"
        else:
            loai = "Tam giác THƯỜNG"
            
        var_kq.set(f"Loại: {loai}\\nChu vi: {2*p:.2f} (m)\\nDiện tích: {s:.4f} (m²)")
        
    except ValueError:
        messagebox.showerror("Lỗi", "Vui lòng nhập số thực hợp lệ!")

# Giao diện
root = tk.Tk()
root.title("Phần mềm Kiểm tra Tam giác - BK TP.HCM")
root.geometry("380x280")

tk.Label(root, text="Cạnh a:").grid(row=0, column=0, padx=10, pady=5, sticky="e")
entry_a = tk.Entry(root); entry_a.grid(row=0, column=1)

tk.Label(root, text="Cạnh b:").grid(row=1, column=0, padx=10, pady=5, sticky="e")
entry_b = tk.Entry(root); entry_b.grid(row=1, column=1)

tk.Label(root, text="Cạnh c:").grid(row=2, column=0, padx=10, pady=5, sticky="e")
entry_c = tk.Entry(root); entry_c.grid(row=2, column=1)

btn = tk.Button(root, text="KIỂM TRA & TÍNH TOÁN", bg="#030391", fg="white", font=("Arial", 9, "bold"), command=tinh_tam_giac)
btn.grid(row=3, column=0, columnspan=2, pady=10)

var_kq = tk.StringVar(value="Kết quả sẽ hiển thị tại đây...")
lbl_kq = tk.Label(root, textvariable=var_kq, fg="#0066cc", justify="left", font=("Arial", 10))
lbl_kq.grid(row=4, column=0, columnspan=2, padx=15, pady=5)

root.mainloop()`,
    notes: "Một bài thi thực hành kinh điển kiểm tra toàn diện tư duy logic, cấu trúc điều kiện, hàm và giao diện GUI."
  },
  {
    id: "ex_ch4_03",
    chapter: "ch4",
    chapterTitle: "Chương 4",
    title: "Bài 4.3: Trò chơi đoán số ngẫu nhiên (while True & break)",
    level: "Dễ",
    problem: "Viết đoạn chương trình cho người dùng đoán số nguyên ngẫu nhiên do máy sinh ra trong đoạn [1, 9]. Nếu đoán đúng xuất 'You are right!' và dừng. Nếu đoán sai thì cho đoán lại cho tới khi đúng.",
    analysis: "Sử dụng thư viện random với random.randint(1, 9). Dùng vòng lặp vô hạn while True và câu lệnh break khi điều kiện đoán đúng được thỏa mãn.",
    flowchart: `
flowchart TD
    Start(["Bắt đầu"]) --> Rand["target = random.randint(1, 9)"]
    Rand --> In["Người dùng nhập số dự đoán: guess"]
    In --> Check{"guess == target?"}
    Check -- "Sai" --> Retry["In 'Sai rồi, đoán lại!'"] --> In
    Check -- "Đúng" --> Win["In 'You are right!'"] --> End(["Kết thúc"])
    `,
    solution: `import random

def tro_choi_doan_so():
    target = random.randint(1, 9)
    print("Máy tính đã chọn 1 số bí mật từ 1 đến 9. Hãy thử đoán xem!")
    
    so_lan = 0
    while True:
        try:
            guess = int(input("Nhập số bạn đoán: "))
            so_lan += 1
            if guess == target:
                print(f"🎉 You are right! Bạn đã đoán đúng sau {so_lan} lần.")
                break
            elif guess < target:
                print("Số bí mật LỚN HƠN số bạn đoán.")
            else:
                print("Số bí mật NHỎ HƠN số bạn đoán.")
        except ValueError:
            print("Vui lòng chỉ nhập số nguyên hợp lệ!")

tro_choi_doan_so()`,
    notes: "Bài tập 6 trong file BT Chương 4 của bộ môn."
  },
  {
    id: "ex_ch4_04",
    chapter: "ch4",
    chapterTitle: "Chương 4",
    title: "Bài 4.4: In tháp số tam giác đối xứng (Nested Loops)",
    level: "Dễ",
    problem: "Viết đoạn chương trình xuất ra màn hình theo quy luật:\\n1\\n22\\n333\\n4444\\n55555\\n...\\n999999999",
    analysis: "Sử dụng vòng lặp for i in range(1, 10). Ở mỗi dòng, in ký tự str(i) lặp lại i lần (hoặc dùng vòng lặp lồng).",
    flowchart: `
flowchart TD
    Start(["Bắt đầu"]) --> Loop["For i từ 1 đến 9"]
    Loop --> Print["In chuỗi: str(i) * i"]
    Print --> CheckLoop{"Hết vòng lặp?"}
    CheckLoop -- "Chưa" --> Loop
    CheckLoop -- "Hết" --> End(["Kết thúc"])
    `,
    solution: `def in_thap_so():
    # Cách 1: Tận dụng phép nhân chuỗi trong Python (nhanh, chuẩn Pythonic)
    for i in range(1, 10):
        print(str(i) * i)

# Cách 2: Bằng 2 vòng lặp lồng nhau (Nested loops cổ điển)
def in_thap_so_nested():
    for i in range(1, 10):
        for j in range(i):
            print(i, end="")
        print()

in_thap_so()`,
    notes: "Bài tập 5 trong file BT Chương 4."
  },
  {
    id: "ex_ch5_03",
    chapter: "ch5",
    chapterTitle: "Chương 5",
    title: "Bài 5.3: Tính đạo hàm của hàm đa thức bậc n",
    level: "Trung bình",
    problem: "Viết hàm tính đạo hàm của hàm số đa thức bậc n: f(x) = a_n * x^n + a_(n-1) * x^(n-1) + ... + a_1 * x + a_0. Input: list chứa các hệ số a_i. Output: list chứa các hệ số của đa thức đạo hàm.",
    analysis: "Đạo hàm của a_k * x^k là (k * a_k) * x^(k-1). Duyệt từ số mũ cao nhất xuống bậc 1, bậc 0 đạo hàm bằng 0.",
    flowchart: `
flowchart TD
    Start(["Bắt đầu: Input list coeffs = [a_n, a_(n-1), ..., a_0]"]) --> Degree["Bậc đa thức: n = len(coeffs) - 1"]
    Degree --> Loop["Duyệt từng phần tử bậc k từ n về 1:<br>hệ số mới = k * a_k"]
    Loop --> Out["Trả về list hệ số đạo hàm mới"] --> End(["Kết thúc"])
    `,
    solution: `def dao_ham_da_thuc(coeffs):
    """
    coeffs: list hệ số từ bậc cao nhất đến bậc 0
    Ví dụ: f(x) = 3x^3 - 5x^2 + 2x + 7 -> coeffs = [3, -5, 2, 7]
    Đạo hàm: f'(x) = 9x^2 - 10x + 2 -> kết quả: [9, -10, 2]
    """
    n = len(coeffs) - 1
    if n == 0:
        return [0]  # Đạo hàm của hằng số là 0
        
    derivative = []
    for i, a_k in enumerate(coeffs[:-1]):
        power = n - i
        derivative.append(a_k * power)
        
    return derivative

# Chạy thử
f = [3, -5, 2, 7]
df = dao_ham_da_thuc(f)
print(f"Đa thức gốc: {f}")
print(f"Đa thức đạo hàm: {df}")`,
    notes: "Bài tập 5 trong file BT Chương 5."
  },
  {
    id: "ex_ch7_02",
    chapter: "ch7",
    chapterTitle: "Chương 7",
    title: "Bài 7.2: Trực quan hóa Logo ĐHBK TP.HCM bằng Matplotlib",
    level: "Đề thi",
    problem: "Sử dụng matplotlib.patches.Polygon và numpy tạo nên biểu trưng đặc trưng của Trường Đại học Bách Khoa TP.HCM gồm các khối hình thoi màu xanh đậm (#030391) và xanh nhạt (#1488D8) đối xứng.",
    analysis: "Xác định 6 đỉnh của hình lục giác đều bằng hàm lượng giác (cos, sin) với bước nhảy 60 độ (pi/3). Tạo các vector đỉnh và vẽ các hình thoi Polygon tương ứng.",
    flowchart: `
flowchart TD
    Init["Tạo 6 đỉnh lục giác đều qua sin, cos"] --> Poly["Tính tọa độ các đỉnh hình thoi 2 màu đối xứng"]
    Poly --> Draw["ax.add_patch(Polygon)"]
    Draw --> Text["Vẽ chữ 'BK' và 'TP.HCM' ở tâm với font Arial bold"]
    Text --> Show["plt.axis('off') và plt.show()"]
    `,
    solution: `import matplotlib.pyplot as plt
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

    rhombus_dark = np.array([v_prev, v_curr, 2 * v_curr, v_prev + v_curr])
    ax.add_patch(Polygon(rhombus_dark, closed=True, facecolor=DARK_BLUE, edgecolor="none"))

    rhombus_light = np.array([v_curr, v_next, v_next + v_curr, 2 * v_curr])
    ax.add_patch(Polygon(rhombus_light, closed=True, facecolor=LIGHT_BLUE, edgecolor="none"))

ax.add_patch(Polygon(V, closed=True, facecolor="white", edgecolor="none"))

ax.text(0, 0.12, "BK", fontfamily="Arial", fontweight="bold", fontsize=75, color=DARK_BLUE, ha="center", va="center")
ax.text(0, -0.42, "TP.HCM", fontfamily="Arial", fontweight="bold", fontsize=28, color=LIGHT_BLUE, ha="center", va="center")

ax.set_aspect("equal")
ax.set_xlim(-2.2, 2.2)
ax.set_ylim(-2.0, 2.3)
ax.axis("off")
plt.tight_layout()
plt.show()`,
    notes: "Trích mã nguồn bài tập lớn test7.py trong thư mục thực hành của sinh viên."
  }
];
