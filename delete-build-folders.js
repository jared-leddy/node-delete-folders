const del = require('del');
 
(async () => {
    const deleteDistFolder = await del(['dist']);
    const deleteLibFolder = await del(['lib']);
    const deleteReleaseFolder = await del(['release']);
    const deleteTempFolder = await del(['temp']);
 
    console.log('/dist Deleted files:\n', deleteDistFolder.join('\n'));
    console.log('/lib Deleted files:\n', deleteLibFolder.join('\n'));
    console.log('/release Deleted files:\n', deleteReleaseFolder.join('\n'));
    console.log('/temp Deleted files:\n', deleteTempFolder.join('\n'));
})();
