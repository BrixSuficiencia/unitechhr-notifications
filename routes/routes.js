const express = require('express');
const notificationsController = require('../controllers/notificationsController');
const router = express.Router();

/* // Routes for applicant notifications
router.post('/applicant/:applicantId/notifications', notificationsController.addApplicantNotification);
router.get('/applicant/:applicantId/notifications', notificationsController.getApplicantNotifications); */

// Routes for developer profile notifications
router.post('/developers/:developerId/notifications', notificationsController.addDeveloperProfileNotification);
router.get('/developers/:developerId/notifications', notificationsController.getDeveloperProfileNotifications);

// Routes for university hrHead notifications
router.post('/universities/:universityName/hrHead/:hrHeadId/notifications', notificationsController.addHrHeadNotification);
router.get('/universities/:universityName/hrHead/:hrHeadId/notifications', notificationsController.getHrHeadNotifications);

// Routes for university hrPersonnel notifications
router.post('/universities/:universityName/hrPersonnel/:hrPersonnelId/notifications', notificationsController.addHrPersonnelNotification);
router.get('/universities/:universityName/hrPersonnel/:hrPersonnelId/notifications', notificationsController.getHrPersonnelNotifications);

// Routes for university employee notifications
router.post('/universities/:universityName/employees/:employeeId/notifications', notificationsController.addEmployeeNotification);
router.get('/universities/:universityName/employees/:employeeId/notifications', notificationsController.getEmployeeNotifications);

module.exports = router;
