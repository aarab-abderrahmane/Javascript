class Person {

    //php code
    //   class Person{

    //     #properties :
    //     public $name = "abderrahmane";
    //     public $age = 18;

    //     #method :
    //     public function greet(){
    //             echo "Hello , my name is ".$this->name;
    //     }

    // }

    // #object 
    // $me = new Person();
    // #without constructor
    // $me->name="aarab abderrahmane";
    // $me->greet();

    constructor(){  //empty
        this.name = "abderrahmane";
        this.age = 18;

    }

    greet(){

        console.log("hello , "+this.name);
    }

}

const me = new Person();    
me.greet() // by default 
me.name = "aarab-abderrahmane";
me.greet()




    //    public $title ;
    //     public $author;

    //     public function __construct($title_input,$author_input){

    //         $this->title=$title_input;
    //         $this->author=$author_input;

    //     }

    //     public function display(){
    //         echo "The book \"" . $this->title . "\" is written by " . $this->author . ".";
    //     }

    // }

    // $book1 = new Book("Harry Potter","J.K. Rowling");
    // $book1->display();


class Book{

    //properties  
    constructor(titre,author){

        this.titre = titre ;
        this.author = author ; 

    }

    display(){
        console.log("the book \""+this.titre+"\" is written by "+this.author);

    }


}

const book1 = new Book('Harry Potter','Rowling');
book1.display()




//Encapsulation

class User{

    //properties private 
    #username
    #email

    constructor(username,email,code="123",age=18){
        this.code = code;
        this.age=age;
        this.#email= email;
        this.#username = username;

    }

    getUsername(){
        return `the username is ${this.#username}`;
    }

    setUsername(newUsername){
        if(!newUsername.trim()==""){
            this.#username = newUsername;
            return "the username changed successfully!";
        }
        else{
            return 'the name is empty !!';
        }
    }

    toString(){
        return `code: ${this.code}, username: ${this.#username}, email: ${this.#email}, age: ${this.age}`;
    }



}


const user1 = new User("abdulrahman",'abdu@gmail.com','01234')
console.log(user1.getUsername())

user1.username="ayoub"; // not change
console.log(user1.getUsername())

console.log(user1.setUsername(''));
console.log(user1.getUsername())

console.log(user1.setUsername('ayoub'));
console.log(user1.getUsername())

console.log(user1.toString())









