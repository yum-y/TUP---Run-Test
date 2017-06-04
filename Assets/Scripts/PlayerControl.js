#pragma strict

var moveLeft : KeyCode;
var moveRight : KeyCode;
var moveJump : KeyCode;
var grounded = true;
var speed : float = 5;
 var panim : Animator;

 function Start () {
     panim = GetComponent("Animator");
 }


function Update () {
  if (Input.GetKey(moveLeft)) {
   GetComponent.<Rigidbody2D>().velocity.x = speed * -1;
  }
  else if (Input.GetKey(moveRight)) {
   GetComponent.<Rigidbody2D>().velocity.x = speed;
  } else {
   GetComponent.<Rigidbody2D>().velocity.x = speed * 0;
  }
  
 if(!grounded && GetComponent.<Rigidbody2D>().velocity.y == 0) {
         grounded = true;
         panim.SetBool("Grounded", true);
     }  
  
  if (Input.GetKey(moveJump)) {
     if (Input.GetKey(moveJump) && grounded == true && GetComponent.<Rigidbody2D>().velocity.y == 0) {
         GetComponent.<Rigidbody2D>().velocity.y = 0;
         GetComponent.<Rigidbody2D>().velocity = new Vector2(GetComponent.<Rigidbody2D>().velocity.x, 4);
//         rigidbody2D.AddForce(new Vector2(0,330));
         grounded = false;
         panim.SetBool("Grounded", false);
     }
 }


panim.SetFloat("LatSpeed", GetComponent.<Rigidbody2D>().velocity.x); 
//print("XSpeed: "+rigidbody2D.velocity.x+" YSpeed: "+rigidbody2D.velocity.y);
}

function OnCollisionEnter2D(coll: Collision2D) {
if(coll.collider.gameObject.name == "block") {
GetComponent.<Rigidbody2D>().velocity.y = 0;
}

print("Element collided: "+coll.collider.gameObject.name+" XSpeed: "+GetComponent.<Rigidbody2D>().velocity.x+" YSpeed: "+GetComponent.<Rigidbody2D>().velocity.y);

}

