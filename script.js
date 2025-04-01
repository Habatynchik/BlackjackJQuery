$(document).ready(function () {
    let deck = [
        {
            value: "ace",
            shortValue: "A",
            suit: "club",
            shortSuit: "♣",
            price: 11,
            isFlipped: false,
        },
        {
            value: "2",
            shortValue: "2",
            suit: "club",
            shortSuit: "♣",
            price: 2,
            isFlipped: false,
        },
        {
            value: "3",
            shortValue: "3",
            suit: "club",
            shortSuit: "♣",
            price: 3,
            isFlipped: false,
        },
        {
            value: "4",
            shortValue: "4",
            suit: "club",
            shortSuit: "♣",
            price: 4,
            isFlipped: false,
        },
        {
            value: "5",
            shortValue: "5",
            suit: "club",
            shortSuit: "♣",
            price: 5,
            isFlipped: false,
        },
        {
            value: "6",
            shortValue: "6",
            suit: "club",
            shortSuit: "♣",
            price: 6,
            isFlipped: false,
        },
        {
            value: "7",
            shortValue: "7",
            suit: "club",
            shortSuit: "♣",
            price: 7,
            isFlipped: false,
        },
        {
            value: "8",
            shortValue: "8",
            suit: "club",
            shortSuit: "♣",
            price: 8,
            isFlipped: false,
        },
        {
            value: "9",
            shortValue: "9",
            suit: "club",
            shortSuit: "♣",
            price: 9,
            isFlipped: false,
        },
        {
            value: "10",
            shortValue: "10",
            suit: "club",
            shortSuit: "♣",
            price: 10,
            isFlipped: false,
        },
        {
            value: "jack",
            shortValue: "J",
            suit: "club",
            shortSuit: "♣",
            price: 10,
            isFlipped: false,
        },
        {
            value: "queen",
            shortValue: "Q",
            suit: "club",
            shortSuit: "♣",
            price: 10,
            isFlipped: false,
        },
        {
            value: "king",
            shortValue: "K",
            suit: "club",
            shortSuit: "♣",
            price: 10,
            isFlipped: false,
        },
        {
            value: "ace",
            shortValue: "A",
            suit: "diamond",
            shortSuit: "♦",
            price: 11,
            isFlipped: false,
        },
        {
            value: "2",
            shortValue: "2",
            suit: "diamond",
            shortSuit: "♦",
            price: 2,
            isFlipped: false,
        },
        {
            value: "3",
            shortValue: "3",
            suit: "diamond",
            shortSuit: "♦",
            price: 3,
            isFlipped: false,
        },
        {
            value: "4",
            shortValue: "4",
            suit: "diamond",
            shortSuit: "♦",
            price: 4,
            isFlipped: false,
        },
        {
            value: "5",
            shortValue: "5",
            suit: "diamond",
            shortSuit: "♦",
            price: 5,
            isFlipped: false,
        },
        {
            value: "6",
            shortValue: "6",
            suit: "diamond",
            shortSuit: "♦",
            price: 6,
            isFlipped: false,
        },
        {
            value: "7",
            shortValue: "7",
            suit: "diamond",
            shortSuit: "♦",
            price: 7,
            isFlipped: false,
        },
        {
            value: "8",
            shortValue: "8",
            suit: "diamond",
            shortSuit: "♦",
            price: 8,
            isFlipped: false,
        },
        {
            value: "9",
            shortValue: "9",
            suit: "diamond",
            shortSuit: "♦",
            price: 9,
            isFlipped: false,
        },
        {
            value: "10",
            shortValue: "10",
            suit: "diamond",
            shortSuit: "♦",
            price: 10,
            isFlipped: false,
        },
        {
            value: "jack",
            shortValue: "J",
            suit: "diamond",
            shortSuit: "♦",
            price: 10,
            isFlipped: false,
        },
        {
            value: "queen",
            shortValue: "Q",
            suit: "diamond",
            shortSuit: "♦",
            price: 10,
            isFlipped: false,
        },
        {
            value: "king",
            shortValue: "K",
            suit: "diamond",
            shortSuit: "♦",
            price: 10,
            isFlipped: false,
        },
        {
            value: "ace",
            shortValue: "A",
            suit: "heart",
            shortSuit: "♥",
            price: 11,
            isFlipped: false,
        },
        {
            value: "2",
            shortValue: "2",
            suit: "heart",
            shortSuit: "♥",
            price: 2,
            isFlipped: false,
        },
        {
            value: "3",
            shortValue: "3",
            suit: "heart",
            shortSuit: "♥",
            price: 3,
            isFlipped: false,
        },
        {
            value: "4",
            shortValue: "4",
            suit: "heart",
            shortSuit: "♥",
            price: 4,
            isFlipped: false,
        },
        {
            value: "5",
            shortValue: "5",
            suit: "heart",
            shortSuit: "♥",
            price: 5,
            isFlipped: false,
        },
        {
            value: "6",
            shortValue: "6",
            suit: "heart",
            shortSuit: "♥",
            price: 6,
            isFlipped: false,
        },
        {
            value: "7",
            shortValue: "7",
            suit: "heart",
            shortSuit: "♥",
            price: 7,
            isFlipped: false,
        },
        {
            value: "8",
            shortValue: "8",
            suit: "heart",
            shortSuit: "♥",
            price: 8,
            isFlipped: false,
        },
        {
            value: "9",
            shortValue: "9",
            suit: "heart",
            shortSuit: "♥",
            price: 9,
            isFlipped: false,
        },
        {
            value: "10",
            shortValue: "10",
            suit: "heart",
            shortSuit: "♥",
            price: 10,
            isFlipped: false,
        },
        {
            value: "jack",
            shortValue: "J",
            suit: "heart",
            shortSuit: "♥",
            price: 10,
            isFlipped: false,
        },
        {
            value: "queen",
            shortValue: "Q",
            suit: "heart",
            shortSuit: "♥",
            price: 10,
            isFlipped: false,
        },
        {
            value: "king",
            shortValue: "K",
            suit: "heart",
            shortSuit: "♥",
            price: 10,
            isFlipped: false,
        },
        {
            value: "ace",
            shortValue: "A",
            suit: "spade",
            shortSuit: "♠",
            price: 11,
            isFlipped: false,
        },
        {
            value: "2",
            shortValue: "2",
            suit: "spade",
            shortSuit: "♠",
            price: 2,
            isFlipped: false,
        },
        {
            value: "3",
            shortValue: "3",
            suit: "spade",
            shortSuit: "♠",
            price: 3,
            isFlipped: false,
        },
        {
            value: "4",
            shortValue: "4",
            suit: "spade",
            shortSuit: "♠",
            price: 4,
            isFlipped: false,
        },
        {
            value: "5",
            shortValue: "5",
            suit: "spade",
            shortSuit: "♠",
            price: 5,
            isFlipped: false,
        },
        {
            value: "6",
            shortValue: "6",
            suit: "spade",
            shortSuit: "♠",
            price: 6,
            isFlipped: false,
        },
        {
            value: "7",
            shortValue: "7",
            suit: "spade",
            shortSuit: "♠",
            price: 7,
            isFlipped: false,
        },
        {
            value: "8",
            shortValue: "8",
            suit: "spade",
            shortSuit: "♠",
            price: 8,
            isFlipped: false,
        },
        {
            value: "9",
            shortValue: "9",
            suit: "spade",
            shortSuit: "♠",
            price: 9,
            isFlipped: false,
        },
        {
            value: "10",
            shortValue: "10",
            suit: "spade",
            shortSuit: "♠",
            price: 10,
            isFlipped: false,
        },
        {
            value: "jack",
            shortValue: "J",
            suit: "spade",
            shortSuit: "♠",
            price: 10,
            isFlipped: false,
        },
        {
            value: "queen",
            shortValue: "Q",
            suit: "spade",
            shortSuit: "♠",
            price: 10,
            isFlipped: false,
        },
        {
            value: "king",
            shortValue: "K",
            suit: "spade",
            shortSuit: "♠",
            price: 10,
            isFlipped: false,
        },
    ];

    let playerHand = [];

    $(".take").click(function (e) {
        $(".deck").children().last().remove();
        let lastCard = deck.pop();
        playerHand.push(lastCard);
        lastCard.isFlipped = true;
        $(".table").append(generateCard(lastCard));
    });

    $(".shuffle").click(function (e) {
        deck.sort(() => 0.5 - Math.random());
        $(".deck").html("");
        drawDeck();
        $(".deck .card").each(function (e) {
            $(this).css({
                transform: `rotateZ(${Math.random() * 180}deg)`,
                transition: "all 0.2s",
            });
            setTimeout(() => {
                $(".deck .card").css({
                    transform: `rotateZ(0deg)`,
                    transition: "all 0.2s",
                });
            });
        });
    });

    drawDeck();

    function drawDeck() {
        let shift = 0;
        deck.forEach((card) => {
            shift += 0.25;
            card = generateCard(card);
            card.css({
                left: `${shift}px`,
                top: `${shift}px`,
                border: "0.1px solid gray",
            });
            $(".deck").append(card);
        });
    }

    function generateCard(card) {
        let element = `
        <div class="card ${!card.isFlipped ? "back" : ""} 
        ${card.suit == "club" || card.suit == "spade" ? "black" : "red"}">
            <div class="top" ${!card.isFlipped ? "hidden" : ""}>
               <div class="number"> ${card.shortValue} </div>
               <div class="suit"> ${card.shortSuit} </div> 
            </div>
            <div class="middle" ${!card.isFlipped ? "hidden" : ""}>
                <div class="suit"> ${card.shortSuit} </div> 
            </div>
            <div class="bottom" ${!card.isFlipped ? "hidden" : ""}>
                <div class="number"> ${card.shortValue} </div>
                <div class="suit"> ${card.shortSuit} </div> 
            </div>
        </div>
        `;
        return $(element);
    }

    $(".table").on("mousemove", ".card", function (event) {
        let card = $(this);
        let rect = card[0].getBoundingClientRect();
        let cardCenterX = rect.left + rect.width / 2;
        let cardCenterY = rect.top + rect.height / 2;
        let deltaX = event.clientX - cardCenterX;
        let deltaY = event.clientY - cardCenterY;

        let angleX = (deltaX / rect.width) * -25;
        let angleY = (deltaY / rect.height) * 20;

        card.css({
            transform: `rotateY(${angleY}deg) rotateX(${angleX}deg) translateY(-10px)`,
            "box-shadow": `${deltaX / -4}px ${
                deltaY / -4
            }px 15px rgba(0,0,0,0.3)`,
        });
    });

    $(".table").on("mouseleave", ".card", function () {
        $(this).css({
            transform: `rotateY(0deg) rotateX(0deg) translateY(0px)`,
            "box-shadow": `0px 0px 0px rgba(0,0,0,0)`,
        });
    });

    $(".table").on("click", ".card", function () {
        $(this).css("transform", "rotateY(90deg)");
        setTimeout(() => {
            $(this).children().toggle();
            $(this).toggleClass("back");
            $(this).css("transform", "rotateY(0deg)");
        }, 250);

        let number = $(this).children(".top").children(".number").html().trim();
        let suit = $(this).children(".top").children(".suit").html().trim();

        deck.filter(
            (card) => card.shortValue == number && card.shortSuit === suit
        ).forEach((card) => {
            card.isFlipped = !card.isFlipped;
        });
    });
});
