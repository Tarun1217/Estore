#include<iostream>
using namespace std;
class Bus
{
    //data member
    public:
    string fuel;
    string company;
    int milage;

    //member function
     void set_fuel(float Fuel)
    {
        fuel=Fuel;
    }
void show()
    {
        cout<<"fuel is "<<fuel<<endl;
        cout<<"company is "<<company<<endl;
        cout<<"milage is "<<milage<<endl;
        cout<<endl;
    }
};
int main()
{
    Bus bus1;
    bus1.set_fuel(100);
    bus1.company="volvo";
    bus1.milage=20;
    bus1.show();

}