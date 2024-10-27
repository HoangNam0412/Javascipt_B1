1. Hãy khai báo các biến và cho biết kết quả của các phép toán dưới đây?  Giải thích vì sao có kết quả đó?
x = true, y = true, z = false

x && y && z → False
- Vì x && y && z yêu cầu tất cả đều true, nhưng z là false, nên kết quả là false
x && y && !z → True
- !z là true (do z là false), nên x && y && !z là true
(x && y) || z → True
- Vì z là false, (x && y) là True nên (x && y) || (Hoặc) chỉ cần 1 điều kiện đúng nên sẽ là True
(x && y) || !z → True
- Vì !z là True, (x && y) là True nên (x && y) || (Hoặc) !z là True
x && (y || z) → True 
- Vì y là true nên (y || z) || (Hoặc) chỉ cần 1 điều kiện đúng nên sẽ là True nên True + True = True
x && !(y || z) → False
- y || z là true, nên !(y || z) là false, và x && false là false
x && (y || !z) → True
- y || !z là true, nên x && (y || !z) là true
x && (!y || z) → False
- !y || z là false, nên x && false là false

2. Hãy khai báo các biến và cho biết kết quả của các phép toán dưới đây?  Giải thích vì sao có kết quả đó?
name = 'AAA', age = 20, isGood = true

age + 10 = 30
- Phép cộng số 20 + 10 ra 30
age % 3 = 2
- 20 chia dư cho 3 là 2
name + ' BBB' = 'AAA BBB'
- Phép nối chuỗi kết quả là 'AAA BBB'
!isGood = False → False
- !isGood phủ định true thành false
name == 'aaa' && age >= 20 → False
- name == 'aaa' là false vì 'AAA' khác 'aaa'
name != 'aaa' && isGood → True
- name != 'aaa' là true, và isGood cũng là true, nên kết quả là true
!(age < 10) && !isGood → False
- !(age < 10) là true, nhưng !isGood là false, nên kết quả là false

3. Hãy khai báo các biến và cho biết kết quả của các phép toán dưới đây?  Giải thích vì sao có kết quả đó?
a = 10, b = 20, c = 30, d = '40'
a + b + c = 60
a - b / c = 9,333
Phép chia được ưu tiên trước (20/30 = 0,666) sau đó tới phép - (10-0,666 = 9,333)
a - (b * c) = -590
Cũng như trên, phép nhân được ưu tiên trước, 20 * 30 = 600, sau đó 10 - 600 = -590
d - (a * b) - c = Lỗi 
Phép trừ không thể thực hiện với chuỗi '40' và số
a + b + c + d = '603040'
a + b + c là 60, sử dụng phép gán chuỗi, sau đó nối '40' thành '603040'
d + a + b + c = '406030'
a + b + c là 60, Chuỗi sẽ nối trước '40' thành '40102030'
d + a - b + c = 4020 
Vì d là chuỗi '40' chuyển a thành chuỗi và thực hiện phép nối, tạo thành '4010' rồi - b '3990' rồi cộng cho c ra '4020'
a - b + d - c = -1070
a - b ra '-10' + chuỗi '40' ra '-1040' rồi - c ra -1070
d - c + a - b = 0
Chuỗi '40' - c ra 10 + a là 20 - b ra 0
a * b + d * c = 1400
a nhân b = 200 chuyển chuỗi '40' thành 40 rồi nhân c = 1200 => 200 + 1200 = 1400

4. Hãy khai báo các biến và cho biết kết quả của các phép toán dưới đây? Giải thích vì sao có kết quả đó?
x = true, y = false, z = 10

x && y → False
y là False 
x && !y → True
!y là True nên kết quả là True
x && z == 10 → True
z == 10 là True x cũng là True 
(x && z == 10) → True
!(x && z == 10) → False
!(x && z == 50) → True
z == 50 là False !(x && z == 50) = True
x && y && z == 10 → False
Ưu tiên phép == trước nên z == 10 là True sau đó tới (x && y) = False nên kết quả == False
x && !y && z == 10 → True
x || y || z == 10 → True
(x && y) || z != 10 → False
!(x && z == 10) || y → False

5. Hãy khai báo các biến và cho biết kết quả của các phép toán dưới đây? Giải thích vì sao có kết quả đó?
a = 1, b = '2', c = 3, d = '4'

b + d = '24'
a + b + c + d = '1234'
a - b + c - d = Lỗi
a - b - c + d = Lỗi
(b + d) - (a + c) = Lỗi
(a + b) - (c + d) = Lỗi
a * c + b * d = Lỗi
-b + d = Lỗi
-b - d = Lỗi
-(b + d) = Lỗi
Lỗi do chuỗi không thể sử dụng phép - hoặc * của chuỗi và số

6. Hãy khai báo các biến và cho biết kết quả của các phép toán dưới đây? Giải thích vì sao có kết quả đó?
age = 25, isMarried = false, isRich = true

age > 25 && isMarried && isRich → False
(age <= 25 || isMarried) && isRich → True
(age > 10 || isRich) && isMarried → False
!(age >= 15 && isMarried) && isRich → True
!(age <= 20) || !(isMarried && isRich) → True
(age > 8 && !isMarried) || isRich → True
!(age < 8 && !isMarried) || isRich → True
(age == 8 && isMarried) || !isRich → False

7 Hãy cho biết kết quả phép toán và biểu thức
a = 11, b = '22', c = 33
a + b = '1122'
a - c = -22
a + b + c = 1122
a + c + b = '4422'
(a + b) % 3 = 0

a * b > 50 → ?
a ** b > 100 → ?
a - (b++) == 5 → ?
a - (++b) == 5 → ?

8. Cho các biến sau: 
isTall = true, isMuscle = false, isHandsome = true
Hãy cho biết kết quả của các biểu thức sau:
isTall && isMuscle → False
!isHandsome → False
!isTall || !isMuscle → False
isTall || !(isMuscle && isHandsome) → True
isMuscle && !(isTall || isHandsome) → False