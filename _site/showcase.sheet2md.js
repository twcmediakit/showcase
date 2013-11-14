var email = Session.getActiveUser().getEmail();

function titlize (title) {
	titleString = title.replace(/[^a-zA-Z0-9]/g, '-').replace(/[ ]/g, '');
	return titleString;
}

function sendMail(data) {
	var attachments = [],
		date = new Date();
		month = date.getMonth() + 1,
		day = ('0' + date.getDate()).slice(-2),
		image1 = '',
		img1Blob = '',
		image2 = '',
		img2Blob = '',
		image3 = '',
		img3Blob = '',
		titleString = titlize(data[0][0]),
		video = '';

	if(data[0][3]) {
		img1Blob = UrlFetchApp.fetch(data[0][3]).getBlob().setName('image1');
		image1 = data[0][3];
	} else {
		img1Blob = image1 = '';
	}

	if(data[0][4]) {
		img2Blob = UrlFetchApp.fetch(data[0][4]).getBlob().setName('image2');
		image2 = data[0][4];
	} else {
		img2Blob = image2 = '';
	}

	if(data[0][5]) {
		img3Blob = UrlFetchApp.fetch(data[0][5]).getBlob().setName('image3');
		image3 = data[0][5];
	} else {
		img3Blob = image3 = '';
	}

	if(data[0][6]) {
		video = data[0][6];
	} else {
		video = '';
	}

	var text = '---\n\
layout: post\n\
title: ' + data[0][0] + '\n\
tags: [' + data[0][1] + ']\n\
classes: [' + (data[0][1]).toLowerCase().replace(/\W+/g, ' ') + ' all]\n\
img1: ' + image1 + '\n\
img2: ' + image2 + '\n\
img3: ' + image3 + '\n\
video: ' + video + '\n\
---\n\
{% include JB/setup %}\n\
\n\
' + data[0][7];

	attachments.push({
		'fileName': 	date.getFullYear() + '-' + month + '-' + day + '-' + titleString + '.md',
		'mimeType': 	'text/plain',
		'content': 		text
	});

	attachments.push(img1Blob);
	if(img2Blob) {
		attachments.push(img2Blob);
	}
	if(img3Blob) {
		attachments.push(img3Blob);
	}
	
	MailApp.sendEmail({
		to:				'kyle.kinnaman@weather.com', 
		subject:		'New Showcase post: ' + data[0][0],
		attachments:	attachments,
		name: 			email,
		htmlBody: 		data[0][7]
	});
}

function buildPost() {
	var sheet = SpreadsheetApp.getActiveSheet(),
        startRow = SpreadsheetApp.getActiveSheet().getMaxRows(),
		dataRange = sheet.getRange(startRow, 3, 1, 9),
		data = dataRange.getValues();
	attachments = 'foo';
	sendMail(data);
}