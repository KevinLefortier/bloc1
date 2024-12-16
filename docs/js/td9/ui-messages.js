$(document).ready(function () {
    // Activer les dropdowns et checkboxes Semantic UI
    $('.ui.dropdown').dropdown();
    $('.ui.checkbox').checkbox();

    // Gérer l'ouverture de la modal
    $('#openModalButton').on('click', function () {
        $('#messageModal').modal('show');
    });

    // Ajouter un message à partir de la modal
    $('#addMessageButton').on('click', function () {
        const type = $('#modalMessageType').val();
        const icon = $('#modalMessageIcon').val();
        const title = $('#modalMessageTitle').val();
        const content = $('#modalMessageContent').val();
        const closeable = $('#modalMessageCloseable').is(':checked');

        // Icônes par défaut
        const defaultIcons = {
            default: "exclamation triangle",
            positive: "check circle",
            negative: "times circle",
            warning: "warning circle",
            info: "info circle"
        };

        // Utiliser une icône par défaut si aucune n'est fournie
        const iconClass = icon || defaultIcons[type];

        // Créer le message
        let message = `
            <div class="ui ${type !== 'default' ? type : ''} message">
                ${closeable ? '<i class="close icon"></i>' : ''}
                <i class="${iconClass} icon"></i>
                <div class="content">
                    <div class="header">${title || 'Message sans titre'}</div>
                    <p>${content || 'Contenu vide'}</p>
                </div>
            </div>
        `;

        // Ajouter le message dans la zone de messages
        $('#dynamicMessageArea').append(message);

        // Activer la fermeture des messages si nécessaire
        if (closeable) {
            $('.message .close').on('click', function () {
                $(this).closest('.message').transition('fade');
            });
        }

        // Cacher le message par défaut si un message a été ajouté
        $('#defaultMessage').hide();

        // Fermer la modal
        $('#messageModal').modal('hide');
    });

    // Vérifier si la zone de messages est vide au démarrage
    if ($('#dynamicMessageArea').is(':empty')) {
        $('#defaultMessage').show();
    }
});
