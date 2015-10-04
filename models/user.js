var mongoose = require('mongoose');

var userSchema = mongoose.Schema ({
	googleId: String,
	name: String,
	email: String,
	image: String,
	access_token: String,
	absent: Boolean,
	// calendar_id: String
	recentScan: {
		time: String,
		event: [{
			eventId: String,
			location: String,
			start: String,
			end: String,
		}],
		scannedLocation: String,
		correct: Boolean
	},
	recentCorrectScan: {
		time: String,
		event: [{
			eventId: String,
			location: String,
			start: String,
			end: String,
		}],
		scannedLocation: String,
	},
	calendar: [{
		eventId: String,
		location: String,
		creator: String,
		start: String,
		end: String,
		description: String,
		summary: String,
	}],
	groveCalendar: [{
		location: String,
		activity: String,
		focus_area: String,
		checkedIn: Boolean
	}]
});

module.exports = mongoose.model('user', userSchema);