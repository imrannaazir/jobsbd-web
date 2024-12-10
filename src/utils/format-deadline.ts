export const formatDeadline = (isoDate: string): string => {
    const date = new Date(isoDate);
  
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const day = date.getDate();
    const year = date.getFullYear().toString().slice(-2);
  
    // Helper to add ordinal suffix to the day
    const getOrdinalSuffix = (day: number): string => {
      if (day % 10 === 1 && day !== 11) return "st";
      if (day % 10 === 2 && day !== 12) return "nd";
      if (day % 10 === 3 && day !== 13) return "rd";
      return "th";
    };
  
    const ordinalSuffix = getOrdinalSuffix(day);
  
    return `${months[date.getMonth()]} ${day}${ordinalSuffix}, ${year}`;
  };
  