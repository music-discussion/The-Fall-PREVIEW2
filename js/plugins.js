// Generated by RPG Maker.
// Do not edit this file directly.
var $plugins =
[
{"name":"SRD_AltBattleScene_Undertale","status":true,"description":"An Alternative Battle Screen based off of the one from Undertale.","parameters":{"ACT Text":"ACT","ACT Skill ID":"13","Animate Cursor?":"false","Enemy HP Front Color":"#7FFF00","Enemy HP Back Color":"red","== Help Window ==":"","Item Help Window?":"true","== Command Window ==":"","Use Command Motions?":"true","Use Command Images?":"true","Min Scale":"1","Max Scale":"1.2","Scaling Speed":"0.04","== Misc. Positioning ==":"","Item Offset":"40","Cursor X Offset":"8","Cursor Y Offset":"7","Actor Com. Cur. X":"22","Actor Com. Cur. Y":"1"}},
{"name":"SRD_UndertaleBattleSystem","status":true,"description":"Allows developers to create bullet-hell dodge systems in their battles; based off of the system from Undertale.","parameters":{"Draw Collision Masks":"false","== Sound Effects ==":"","Damage SE":"Damage4","Death Damage SE":"Ice2","Death Fade SE":"Collapse2","Shield SE":"Shot2","Shoot SE":"Shot1","== Enemy Bubble ==":"","Bubble Window Skin":"Window_Bubble","Auto Save Texts":"true","== Image Hues ==":"","Normal Hue":"0","Gravity Hue":"200","Shield Hue":"100","Trap Hue":"300","Shooter Hue":"40","== Gravity Mode ==":"","Jump Power":"4","Jump Limit":"25","Jump Gravity":"0.4","== Shield Mode ==":"","Shield Image":"Shield","Shield Thickness":"6","== Trap Mode ==":"","Trap Move Speed":"15","Trap Positions":"30, 90, 150","Trap Color":"#FF00FF","== Shooter Mode ==":"","Bullet Image":"","Shoot Cooldown":"30","Bullet X Speed":"0","Bullet Y Speed":"-8","== Defaults ==":"","Default Duration":"1000","Default Mode":"0","Default Invincibility":"60","Default P. Speed":"3","Default P. Shape":"circle","Default P. Width":"20","Default P. Height":"20","Default P. Radius":"10","== Attack Defaults ==":"","Image":"","Animation Frames":"","Animation Speed":"4","Type":"","Initial X":"this.window.x + (this.window.width / 2)","Initial Y":"this.window.y + (this._player.getHeight() / 2)","Collision Type":"circle","Radius":"13","Width":"26","Height":"26","X Speed":"0","Y Speed":"2","X Accel":"0","Y Accel":"0","X Scale":"1","Y Scale":"1","Opacity":"255","Rotation":"0","Visibility":"true","Color":"random","Spawn Rate":"100","Spawn Delay":"0","Delete Distance":"1","Destructible":"true","Direct Code":"","Initial Code":"","== Battle Frame ==":"","Collision Padding":"5","Background Opacity":"255","Frame X":"(Graphics.width / 2) - (width / 2)","Frame Width":"180","Frame Height":"180","== Actor HP Window ==":"","Actor Frame X":"(Graphics.boxWidth / 2) - (this._singleActorHP.width / 2)","Actor Frame Y":"Graphics.height - this._singleActorHP.height - 20","Actor Frame Width":"400","Actor Frame Height":"this.fittingHeight(1)"}},
{"name":"SRD_ActSpareSystem","status":true,"description":"Replicates the ACT/SPARE system from Undertale.","parameters":{"Enemy Variable ID":"10"}},
{"name":"SRD_EscapeUpgrade","status":true,"description":"","parameters":{"Escape Formula":"0.45","Escape Rewards":"false"}},
{"name":"SRD_SuperToolsEngine","status":true,"description":"The heart of all maker-style plugins; it adds a playtesting editor that can be opened with F12.","parameters":{"Connect Editor":"true","Auto Open Window":"false","Auto Move Window":"true","Menu Editor Exempt List":"[\"Window_BattleLog\",\"Window_MapName\"]"}},
{"name":"Community_Basic","status":false,"description":"Plugin used to set basic parameters.","parameters":{"cacheLimit":"20","screenWidth":"816","screenHeight":"624","changeWindowWidthTo":"","changeWindowHeightTo":"","renderingMode":"auto","alwaysDash":"off"}},
{"name":"MadeWithMv","status":true,"description":"Show a Splash Screen \"Made with MV\" and/or a Custom Splash Screen before going to main screen.","parameters":{"Show Made With MV":"true","Made with MV Image":"Loading","Show Custom Splash":"true","Custom Image":"warning","Fade Out Time":"120","Fade In Time":"120","Wait Time":"160"}},
{"name":"SRD_HUDMaker","status":false,"description":"Allows developers to create their own map-based HUD through an in-game GUI window!","parameters":{"HUD Configurations":"[]","Active Updating":"false","Show During Events":"transparent","Map Global Condition":"","Battle Global Condition":"","Disable Delete Key":"true"}},
{"name":"SRD_PluginUpdater","status":false,"description":"Adds a tool to the Super Tools Engine that checks for updates on plugins from SumRndmDde's library.","parameters":{}},
{"name":"SRD_BattleEndEvents","status":false,"description":"Allows Common Events to be played at the end of the battle depending on the results.","parameters":{"Win Common Event":"0","Lose Common Event":"0","Escape Common Event":"0","Abort Common Event":"0","Troop ID Variable":"$gameVariables.set(1)"}},
{"name":"SRD_CharacterCreatorEX","status":true,"description":"Allows players to create their own custom characters.","parameters":{"Layers":"Tail Part2, Wing Part2, Body, Eyes, Eyebrows, Nose, Mouth, Rear Hair Part1, Front Hair Part2, Rear Hair Part2, Clothing, Accessory A, Glasses, Front Hair Part1, Beast Ears, Accessory B, Tail Part1, Wing Part1","Order":"Body, Eyes, Eyebrows, Nose, Mouth, Clothing, Front Hair, Rear Hair, Accessory A, Accessory B, Glasses, Beast Ears, Wing, Tail","Mandatory":"Body, Eyes, Eyebrows, Nose, Mouth","Mandatory Color":"#FFFF44","Print to Console":"false","== Visual Options ==":"","Use Fade Transition":"true","Use Piece Background":"true","Use Scene Background":"true","Background X Scroll":"1","Background Y Scroll":"0","Small Piece Cols":"3","Big Piece Cols":"1","== Dialogues ==":"","Leave Dialogue":"Are you sure you want\\n to save this character?","Mandatory Dialogue":"You need to have all the mandatory sections \\nfilled out before exiting.","== Size Options ==":"","Character Width":"48","Character Height":"48","SV Char Width":"64","SV Char Height":"64","Face Width":"144","Face Height":"144","== Localization ==":"","Yes Text":"Yes!","No Text":"Nope","Color Mouse/Touch Input":"true"}}
];