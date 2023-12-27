npm run => ให้ตัว node ทำการ run script ใน file pack
yarn => เป็นคู่แข่งกับ npm 
-g => ตัวอย่าง npm i -g yarn เป็นการติดตั้งแบบ gobal

nvm => Node Version Manager สามารถทำให้เครื่องเราสามารถมีและใช้ node หลากหลายเวอร์ชันในเครื่องเดียว

เพิ่มเติม
- ในภาษา typescript ตอน run จะทำการแปลงเป็นภาษา javascript ก่อน (สาเหตุที่ typescript run ช้า)
- page router จะเป็น react ส่วน app router จะเป็น next
- ถ้าต้องการไม่ใด้ folder มันซ้อนกัน ให้ไป setting compact
- next js สมัยใหม่จะมองเป็น server component ถ้าต้องการเขียนเป็น client component ต้องกำหนด "use client"
- ตราบใดก็ตามที่มีการใช้ javascript ต้องเขียนแบบ "use client" เท่านั้น
- clildren ใน rootlaout จะแท่นหน้าแต่ละหน้า 
- @ เรียกว่า area import
- http://localhost:3000/exambles/product/999?type=sorasak => ? คือ Query string
- next เป็นแบบ server side จะ console.log และ debugger ไม่ได้ (เพราะมันถูก run ที่ server เรียบร้อยแล้ว) จะเห็นที่ terminal แทน

{***

  // ไม่เอาธีมหลักของ tailwind มาใช้ใน project เดี๋ยวมันจะไปตีกับ mui
  corePlugins : {
    preflight : false 
  }

***}


feature ใหม่ของ app router 
- () ลงเล็บ จะทำให้ next ไม่มองชื่อ  folder เป็น path