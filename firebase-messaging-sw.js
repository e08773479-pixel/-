// استيراد مكتبات فايربيس للخدمة في الخلفية
importScripts('https://www.gstatic.com/firebasejs/10.8.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.8.0/firebase-messaging-compat.js');

// تهيئة إعدادات فايربيس للإشعارات
firebase.initializeApp({
  apiKey: "AIzaSyDPOmjs_GVMhx9qlEURlI90Gb1BDR9hiz8",
  authDomain: "quantumchat-30a44.firebaseapp.com",
  databaseURL: "https://quantumchat-30a44-default-rtdb.firebaseio.com",
  projectId: "quantumchat-30a44",
  storageBucket: "quantumchat-30a44.firebasestorage.app",
  messagingSenderId: "898270556820",
  appId: "1:898270556820:web:0dc8cbf8bd510daab37a81"
});

const messaging = firebase.messaging();

// التعامل مع الإشعارات الواردة في الخلفية
messaging.onBackgroundMessage((payload) => {
  console.log('[firebase-messaging-sw.js] Received background message ', payload);
  
  const notificationTitle = payload.notification.title || "تنبيه جديد من منصة الفيزياء";
  const notificationOptions = {
    body: payload.notification.body || "لديك رسالة أو تحديث جديد في المنصة.",
    icon: "/55.jpg" // صورة الشعار أو صورتك
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
