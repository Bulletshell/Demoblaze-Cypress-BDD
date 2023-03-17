Feature: Demoblaze Store Transaction

    Scenario: Ali wants to buy samsung galaxy phone S6, but he want to consider another in another e-commerce, so he want to just save the goods to the cart
        Given Ali view Samsung Galaxy S6 phone information detail
        When Ali likes it, He add the phone to the cart
        Then Ali can see the goods in the cart

    Scenario: Budi wants to buy a phone, he add the item to cart and place an order
        Given Budi finds a product he likes
        When Budi proceeds to purchase the item
        Then Budi successfully ordered the item
