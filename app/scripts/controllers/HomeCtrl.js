(function() {
    function HomeCtrl(Room, Message, $uibModal, $cookies) {
        this.rooms = Room.all;
        this.currentRoom = null;
        this.currentUser = $cookies.get('blocChatCurrentUser');
        // this.message = "";
        this.addRoom = function() {
            $uibModal.open({
                templateUrl: '/templates/modal.html',
                size: 'sm',
                controller: 'ModalCtrl as modal',
            });
        }

        this.setCurrentRoom = function (room) {
          this.currentRoom = room;
          this.messages = Message.getByRoomId(this.currentRoom.$id);
        }

        this.sendMessage = function (message) {
          this.newMessage.roomId = this.currentRoom.$id;
          this.newMessage.username = this.currentUser;
          Message.send(this.newMessage);

        //  var newMessage = {
          //  content: message,
            //roomId: this.currentRoom.$id,
            // Could potentially just set roomId here to whatever id is needed
            //
            //username: this.currentUser
          //}


        }

    }

    angular
        .module('blocChat')
        .controller('HomeCtrl', ['Room', 'Message', '$uibModal', '$cookies', HomeCtrl]);
})();
