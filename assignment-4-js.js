// problem 1
function calculateTax(income, expenses) {
  if (income <= 0 || expenses <= 0 || income <= expenses) {
    return "Invalid Input";
  }
  const profit = income - expenses;
  const tax = (profit * 20) / 100;
  return tax;
}

// problem 2
function sendNotification(email) {
  if (email.indexOf("@") === -1) {
    return "Invalid Email";
  }
  const divider = email.split("@");
  const username = divider[0];
  const domainName = divider[1];
  const message = username + " sent you an email from " + domainName;
  return message;
}

// problem-3
function checkDigitsInName(name) {
  if (typeof name !== "string") {
    return "Invalid Input";
  }
  for (let i = 0; i < name.length; i++) {
    if (!isNaN(name[i] && name[i] !== " ")) {
      return true;
    }
  }
  return false;
}

// problem-4
function calculateFinalScore(obj) {
  if (typeof obj !== "object" || obj === null) {
    return "Invalid Input";
  }

  const { name, testScore, schoolGrade, isFFamily } = obj;

  if (
    typeof name !== "string" ||
    typeof testScore !== "number" ||
    testScore > 50 ||
    testScore < 0 ||
    typeof schoolGrade !== "number" ||
    schoolGrade > 30 ||
    schoolGrade < 0 ||
    typeof isFFamily !== "boolean"
  ) {
    return "Invalid Input";
  }

  let finalScore = testScore + schoolGrade;

  if (isFFamily) {
    finalScore += 20;
  } else {
    finalScore += 0;
  }

  return finalScore >= 80;
}

// problem 5
function waitingTime(waitingTimes, serialNumber) {
  if (!Array.isArray(waitingTimes) || typeof serialNumber !== "number") {
    return "Invalid Input";
  }
  let totaltime = 0;
  for (let i = 0; i < waitingTimes.length; i++) {
    totaltime += waitingTimes[i];
  }
  const avgtime = Math.round(totaltime / waitingTimes.length);
  const remainingPeople = serialNumber - waitingTimes.length - 1;
  const waitingTime = remainingPeople * avgtime;
  return waitingTime;
}
