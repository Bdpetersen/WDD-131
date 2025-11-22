// ==========================================
// DATA SETUP
// ==========================================
const hikes = [
  {
    name: "Bechler Falls",
    stub: "bechler_falls",
    imgSrc: "https://wdd131.netlify.app/examples/hikes/images/bechler-falls.jpg",
    imgAlt: "Image of Bechler Falls",
    distance: "3 miles",
    tags: ["Easy", "Yellowstone", "Waterfall"],
    description: "Beautiful short hike in Yellowstone along the Bechler river to Bechler Falls",
    directions: "Take Highway 20 north to Ashton. Turn right into the town and continue through. Follow that road for a few miles then turn left again onto the Cave Falls road.Drive to the end of the Cave Falls road. There is a parking area at the trailhead.",
    trailhead: [44.14457, -110.99781]
  },
  {
    name: "Teton Canyon",
    stub: "teton_canyon",
    imgSrc: "https://wdd131.netlify.app/examples/hikes/images/teton-canyon.jpg",
    imgAlt: "Image of Bechler Falls",
    distance: "3 miles",
    tags: ["Easy", "Tetons"],
    description: "Beautiful short (or long) hike through Teton Canyon.",
    directions: "Take Highway 33 East to Driggs. Turn left onto Teton Canyon Road. Follow that road for a few miles then turn right onto Staline Raod for a short distance, then left onto Alta Road. Veer right after Alta back onto Teton Canyon Road. There is a parking area at the trailhead.",
    trailhead: [43.75567, -110.91521]
  },
  {
    name: "Denanda Falls",
    stub: "denanda_falls",
    imgSrc: "https://wdd131.netlify.app/examples/hikes/images/denanda-falls.jpg",
    imgAlt: "Image of Bechler Falls",
    distance: "7 miles",
    tags: ["Moderate", "Yellowstone", "Waterfall"],
    description: "Beautiful hike through Bechler meadows to Denanda Falls",
    directions: "Take Highway 20 north to Ashton. Turn right into the town and continue through. Follow that road for a few miles then turn left again onto the Cave Falls road. Drive to until you see the sign for Bechler Meadows on the left. Turn there. There is a parking area at the trailhead.",
    trailhead: [44.14974, -111.04564]
  },
  {
    name: "Coffee Pot Rapids",
    stub: "coffee_pot",
    imgSrc: "https://wdd131.netlify.app/examples/hikes/images/coffee-pot.jpg",
    imgAlt: "Image of Bechler Falls",
    distance: "2.2 miles",
    tags: ["Easy"],
    description: "Beautiful hike along the Henry's Fork of the Snake River to a set of rapids.",
    directions: "Take Highway 20 north to Island Park. Continue almost to Mack's in. From Highway 20, turn west on Flatrock Road for 1 mile then turn off on Coffee Pot Road and travel one-half mile to the campground entrance road. There is a parking lot right outside the campground.",
    trailhead: [44.49035, -111.36619]
  },
  {
    name: "Menan Butte",
    stub: "menan_butte",
    imgSrc: "https://wdd131.netlify.app/examples/hikes/images/menan-butte.jpg",
    imgAlt: "Image of Menan Butte",
    distance: "3.4 miles",
    tags: ["Moderate", "View"],
    description: "A steep climb to one of the largest volcanic tuff cones in the world. 3.4 miles is the full loop around the crater, can be shortened.",
    directions: "Take Highway 33 West out of Rexburg for about 8 miles. Turn left onto E Butte Road, the right onto Twin Butte road after about a mile. Follow that road for about 3 miles. You will see the parking lot/trailhead on the left.",
    trailhead: [43.78555, -111.98996]
  }
];

const simpleList = ["oranges", "grapes", "lemons", "apples", "Bananas", "watermelons", "coconuts", "broccoli", "mango"];

// ==========================================
// ACTIVITY 1: Sorting a list of strings
// ==========================================

// 1. Standard Sort (Ascending)
const simpleSort = [...simpleList].sort();
console.log("Activity 1 (Ascending):", simpleSort);

// 2. Custom Compare Function (Descending)
function compareFn(a, b) {
  if (a < b) {
    return 1; // Move a to the right (descending)
  } else if (a > b) {
    return -1; // Move a to the left
  }
  return 0;
}

const anotherSort = [...simpleList].sort(compareFn);
console.log("Activity 1 (Descending):", anotherSort);


// ==========================================
// ACTIVITY 2: Filtering a list of strings
// ==========================================

function searchList(list, query) {
    function searchCallback(string) {
        // Convert both to lowercase for case-insensitive search
        return string.toLowerCase().includes(query.toLowerCase());
    }
    return list.filter(searchCallback);
}

console.log("Activity 2 (Search 'an'):", searchList(simpleList, "an"));
console.log("Activity 2 (Search 'b'):", searchList(simpleList, "b"));


// ==========================================
// ACTIVITY 3: Sorting and Filtering Objects
// ==========================================

function searchHikes(list, query) {
    // 1. Filter Function
    function searchCallback(item) {
        // Check Name
        const isName = item.name.toLowerCase().includes(query.toLowerCase());
        
        // Check Description
        const isDesc = item.description.toLowerCase().includes(query.toLowerCase());
        
        // Check Tags (must iterate over array)
        const isTag = item.tags.find(tag => tag.toLowerCase().includes(query.toLowerCase()));
        
        // Return true if any match found
        return isName || isDesc || isTag;
    }

    const filtered = list.filter(searchCallback);

    // 2. Sort Function (by numeric distance)
    // We parse the string "3 miles" into the number 3.0 to sort correctly
    const sorted = filtered.sort((a, b) => {
        const distA = parseFloat(a.distance);
        const distB = parseFloat(b.distance);
        return distA - distB; // Ascending order
    });

    return sorted;
}

// Tests
console.log("Activity 3 (Search 'yellowstone' - sorted):", searchHikes(hikes, "yellowstone"));
console.log("Activity 3 (Search 'moderate'):", searchHikes(hikes, "moderate"));
console.log("Activity 3 (Search 'al'):", searchHikes(hikes, "al"));