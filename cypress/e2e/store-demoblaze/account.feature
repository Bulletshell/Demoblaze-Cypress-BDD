Feature: Demoblaze Account Log out

    Scenario: John is using a computer in a public library, and he always logout every time he finish visiting the demoblaze website, this ensures that no one else can access his account from the same computer
        Given John already login with his account
        When John finished using the website, he logout from his account
        Then John successfully logs out and redirected to the homepage