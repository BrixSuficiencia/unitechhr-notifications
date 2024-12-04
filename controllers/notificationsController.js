const admin = require('firebase-admin');
const db = admin.firestore();

// Add notification for an employee
const addEmployeeNotification = async (req, res) => {
  const { universityName, employeeId } = req.params;
  const notificationData = req.body;

  try {
    const notificationsRef = db.collection('universities').doc(universityName)
      .collection('employees').doc(employeeId).collection('notifications');
    await notificationsRef.add(notificationData);
    res.status(200).send('Notification added successfully');
  } catch (error) {
    console.error('Error adding notification:', error);
    res.status(500).send('Error adding notification');
  }
};

// Get notifications for an employee
const getEmployeeNotifications = async (req, res) => {
  const { universityName, employeeId } = req.params;

  try {
    const notificationsRef = db.collection('universities').doc(universityName)
      .collection('employees').doc(employeeId).collection('notifications');
    const snapshot = await notificationsRef.get();
    
    if (snapshot.empty) {
      return res.status(404).send('No notifications found');
    }

    // Convert the timestamp to a readable format
    const notifications = snapshot.docs.map(doc => {
      const data = doc.data();
      if (data.timestamp) {
        data.timestamp = data.timestamp.toDate().toISOString();  // Convert timestamp to ISO string
      }
      return data;
    });

    res.status(200).json(notifications);
  } catch (error) {
    console.error('Error fetching notifications:', error);
    res.status(500).send('Error fetching notifications');
  }
};

/* // Add notification for an applicant
const addApplicantNotification = async (req, res) => {
  const { applicantId } = req.params;
  const notificationData = req.body;

  try {
    const notificationsRef = db.collection('applicant').doc(applicantId).collection('notifications');
    await notificationsRef.add(notificationData);
    res.status(200).send('Notification added successfully');
  } catch (error) {
    console.error('Error adding notification:', error);
    res.status(500).send('Error adding notification');
  }
};

// Get notifications for an applicant
const getApplicantNotifications = async (req, res) => {
  const { applicantId } = req.params;

  try {
    const notificationsRef = db.collection('applicant').doc(applicantId).collection('notifications');
    const snapshot = await notificationsRef.get();

    if (snapshot.empty) {
      return res.status(404).send('No notifications found');
    }

    // Convert the timestamp to a readable format
    const notifications = snapshot.docs.map(doc => {
      const data = doc.data();
      if (data.timestamp) {
        data.timestamp = data.timestamp.toDate().toISOString();  // Convert timestamp to ISO string
      }
      return data;
    });

    res.status(200).json(notifications);
  } catch (error) {
    console.error('Error fetching notifications:', error);
    res.status(500).send('Error fetching notifications');
  }
}; */

// Add notification for a developer's profile
const addDeveloperProfileNotification = async (req, res) => {
    const { developerId } = req.params;  // We no longer need profileId in the path
    const notificationData = req.body;
  
    try {
      const notificationsRef = db.collection('developers').doc(developerId)
        .collection('notifications'); // We directly access the developer's notifications collection
      await notificationsRef.add(notificationData);
      res.status(200).send('Notification added successfully');
    } catch (error) {
      console.error('Error adding notification:', error);
      res.status(500).send('Error adding notification');
    }
  };
  
  // Get notifications for a developer's profile
  const getDeveloperProfileNotifications = async (req, res) => {
    const { developerId } = req.params;  // We no longer need profileId in the path
  
    try {
      const notificationsRef = db.collection('developers').doc(developerId)
        .collection('notifications'); // We directly access the developer's notifications collection
      const snapshot = await notificationsRef.get();
  
      if (snapshot.empty) {
        return res.status(404).send('No notifications found');
      }
  
      const notifications = snapshot.docs.map(doc => {
        const data = doc.data();
        if (data.timestamp) {
          data.timestamp = data.timestamp.toDate().toISOString();  // Convert timestamp to ISO string
        }
        return data;
      });
  
      res.status(200).json(notifications);
    } catch (error) {
      console.error('Error fetching notifications:', error);
      res.status(500).send('Error fetching notifications');
    }
};

// Add notification for an HR Head in a university
const addHrHeadNotification = async (req, res) => {
  const { universityName, hrHeadId } = req.params;
  const notificationData = req.body;

  try {
    const notificationsRef = db.collection('universities').doc(universityName)
      .collection('hrHead').doc(hrHeadId).collection('notifications');
    await notificationsRef.add(notificationData);
    res.status(200).send('Notification added successfully');
  } catch (error) {
    console.error('Error adding notification:', error);
    res.status(500).send('Error adding notification');
  }
};

// Get notifications for an HR Head in a university
const getHrHeadNotifications = async (req, res) => {
  const { universityName, hrHeadId } = req.params;

  try {
    const notificationsRef = db.collection('universities').doc(universityName)
      .collection('hrHead').doc(hrHeadId).collection('notifications');
    const snapshot = await notificationsRef.get();

    if (snapshot.empty) {
      return res.status(404).send('No notifications found');
    }

    const notifications = snapshot.docs.map(doc => {
      const data = doc.data();
      if (data.timestamp) {
        data.timestamp = data.timestamp.toDate().toISOString();  // Convert timestamp to ISO string
      }
      return data;
    });

    res.status(200).json(notifications);
  } catch (error) {
    console.error('Error fetching notifications:', error);
    res.status(500).send('Error fetching notifications');
  }
};

// Add notification for an HR Personnel in a university
const addHrPersonnelNotification = async (req, res) => {
  const { universityName, hrPersonnelId } = req.params;
  const notificationData = req.body;

  try {
    const notificationsRef = db.collection('universities').doc(universityName)
      .collection('hrPersonnel').doc(hrPersonnelId).collection('notifications');
    await notificationsRef.add(notificationData);
    res.status(200).send('Notification added successfully');
  } catch (error) {
    console.error('Error adding notification:', error);
    res.status(500).send('Error adding notification');
  }
};

// Get notifications for an HR Personnel in a university
const getHrPersonnelNotifications = async (req, res) => {
  const { universityName, hrPersonnelId } = req.params;

  try {
    const notificationsRef = db.collection('universities').doc(universityName)
      .collection('hrPersonnel').doc(hrPersonnelId).collection('notifications');
    const snapshot = await notificationsRef.get();

    if (snapshot.empty) {
      return res.status(404).send('No notifications found');
    }

    const notifications = snapshot.docs.map(doc => {
      const data = doc.data();
      if (data.timestamp) {
        data.timestamp = data.timestamp.toDate().toISOString();  // Convert timestamp to ISO string
      }
      return data;
    });

    res.status(200).json(notifications);
  } catch (error) {
    console.error('Error fetching notifications:', error);
    res.status(500).send('Error fetching notifications');
  }
};

module.exports = {
  addEmployeeNotification,
  getEmployeeNotifications,
  addApplicantNotification,
  getApplicantNotifications,
  addDeveloperProfileNotification,
  getDeveloperProfileNotifications,
  addHrHeadNotification,
  getHrHeadNotifications,
  addHrPersonnelNotification,
  getHrPersonnelNotifications,
};
