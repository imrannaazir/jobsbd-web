export const convertIntoDateString =(date: Date) => {
    
const dateObject = new Date(date);

// Extract day, month, and year
const day = dateObject.getDate();
const month = dateObject.getMonth() + 1; // Months are 0-indexed, so add 1
const year = dateObject.getFullYear();

// Format as D/M/Y
const formattedDate = `${day}/${month}/${year}`;

return formattedDate; 

}