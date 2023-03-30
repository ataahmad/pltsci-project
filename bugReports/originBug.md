# __Case 5 and 6: Origin Return Bug__


## __Summary:__
- Case 5 and 6 return invalid number of patches cleaned.

---

## __Description:__
- When running certain instructions for the Hoover to navigate in all directions and return to the origin, the count of patches gets incremented, even if there are no patches being passed in (Case 5).

---

## __Expected Result:__
- The test results should return the proper amount of patches cleaned.

---


## __Actual Result:__  
- We return the consistent number 4 for patches cleaned, when the hoover goes back and forth in all four directions.

---


## __Impact:__
- This renders the Hoover patch cleaning data invalid.

---

## __Priority:__
- High

---


## __Environment:__
- Standard environment created through setup instructions

---

## __Reproducability:__
- 100% of the time.

---



## __Steps to Reproduce:__
- Follow all setup instructions
- Execute the Test Suite.
- Observe the failed case 5 and case 6

---
