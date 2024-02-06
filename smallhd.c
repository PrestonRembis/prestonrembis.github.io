/**
 * @file smallhd.c
 * @author Preston Rembis
 * @brief Program made for SmallHD application, 3 functions for 3 lists
*/

/**
 * To compile run 'gcc smallhd.c', 
 * Then run the executable by just typing, './a.exe' (Windows) or './a.out' (Linux)
 */ 


#include<stdio.h>
#include<string.h>

int main()
{
    // List of lists
    char *list[][3] = {
        {"String 1", "String 22", "String 33"},
        {"String red", "String green", "String blue"},
        {"String small", "String med", "String large"}
    };

    // Input one - which list
    int numOne;
    // Input two - which function
    int numTwo;

    printf("Enter integer one: \n");
    scanf("%d", &numOne);

    printf("\nEnter integer two: \n");
    scanf("%d", &numTwo);

    switch (numTwo)
    {
    case 1:
        printf("\nAscending order\n");
        for (int i = 0; i < 3; i++)
        {
            printf(" %s ", list[numOne][i]);
        }
        break;

    case 2:
        printf("\nDescending order\n");
        for (int i = 2; i >= 0; i--)
        {
            printf(" %s ", list[numOne][i]);
        }
        break;

    case 3:
    {
        int shortest;
        shortest = strlen(list[numOne][0]);
        int index = 0;
        // Looping through list to find shortest string
        for (int i = 1; i < 3; i++)
        {
            if(strlen(list[i][numOne]) < shortest)
            {
                shortest = strlen(list[numOne][index]);
                index = i;
            }
        }
        printf("\nShortest string: %s\n", list[numOne][index]);
        break;
    }

    default:
        printf("\nInvalid integer two input (1-3)");
        break;
    }

    return 0;
}