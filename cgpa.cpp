#include <iostream>
#include <vector>

using namespace std;

int main() {
    int numCourses;
    cout << "Enter the number of courses: ";
    cin >> numCourses;

    vector<double> grades(numCourses);
    vector<int> credits(numCourses);

    cout << "Enter the grades (on a scale of 0 to 10) and corresponding credit hours:\n";
    for (int i = 0; i < numCourses; ++i) {
        cout << "Course " << i + 1 << " grade (GPA): ";
        cin >> grades[i];
        cout << "Course " << i + 1 << " credit hours: ";
        cin >> credits[i];
    }

    double totalWeightedGrades = 0.0;
    int totalCredits = 0;

    for (int i = 0; i < numCourses; ++i) {
        totalWeightedGrades += grades[i] * credits[i];
        totalCredits += credits[i];
    }

    if (totalCredits == 0) {
        cout << "Total credits cannot be zero. Please check your inputs.\n";
    } else {
        double cgpa = totalWeightedGrades / totalCredits;
        cout << "Your Cumulative Grade Point Average (CGPA) is: " << cgpa << endl;
    }

    return 0;
}
