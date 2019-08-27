#import <JavaScriptCore/JavaScriptCore.h>
#import "allheaders.h"
#import "allprotos.h"
#pragma clang diagnostic push
#pragma clang diagnostic ignored "-Wdeprecated-declarations"
#pragma clang diagnostic ignored "-Wobjc-property-no-attribute"
#pragma clang diagnostic ignored "-Wnullability-completeness"
void load_UIKit_UIDocument_symbols(JSContext*);
@protocol UIDocumentInstanceExports<JSExport, NSFilePresenterInstanceExports_, NSProgressReportingInstanceExports_>
@property (readonly,nonatomic) BOOL hasUnsavedChanges;
@property (copy) NSDate * fileModificationDate;
@property (strong) NSUndoManager * undoManager;
@property (readonly,copy) NSString * fileType;
@property (readonly,copy) NSString * localizedName;
@property (readonly) UIDocumentState documentState;
@property (readonly,nonatomic) NSString * savingFileType;
@property (readonly) NSProgress * progress;
@property (readonly) NSURL * fileURL;
JSExportAs(performAsynchronousFileAccessUsingBlock,
-(void) jsperformAsynchronousFileAccessUsingBlock: (JSValue *) block );
JSExportAs(closeWithCompletionHandler,
-(void) jscloseWithCompletionHandler: (JSValue *) completionHandler );
-(void) updateChangeCountWithToken: (id) changeCountToken forSaveOperation: (UIDocumentSaveOperation) saveOperation ;
JSExportAs(writeContentsToURLForSaveOperationOriginalContentsURLError,
-(BOOL) jswriteContents: (id) contents toURL: (NSURL *) url forSaveOperation: (UIDocumentSaveOperation) saveOperation originalContentsURL: (NSURL *) originalContentsURL error: (JSValue *) outError );
JSExportAs(revertToContentsOfURLCompletionHandler,
-(void) jsrevertToContentsOfURL: (NSURL *) url completionHandler: (JSValue *) completionHandler );
-(void) updateChangeCount: (UIDocumentChangeKind) change ;
-(void) disableEditing;
JSExportAs(initWithFileURL,
-(id) jsinitWithFileURL: (NSURL *) url );
-(void) handleError: (NSError *) error userInteractionPermitted: (BOOL) userInteractionPermitted ;
-(void) enableEditing;
JSExportAs(fileAttributesToWriteToURLForSaveOperationError,
-(NSDictionary *) jsfileAttributesToWriteToURL: (NSURL *) url forSaveOperation: (UIDocumentSaveOperation) saveOperation error: (JSValue *) outError );
JSExportAs(readFromURLError,
-(BOOL) jsreadFromURL: (NSURL *) url error: (JSValue *) outError );
-(void) userInteractionNoLongerPermittedForError: (NSError *) error ;
JSExportAs(saveToURLForSaveOperationCompletionHandler,
-(void) jssaveToURL: (NSURL *) url forSaveOperation: (UIDocumentSaveOperation) saveOperation completionHandler: (JSValue *) completionHandler );
-(NSString *) fileNameExtensionForType: (NSString *) typeName saveOperation: (UIDocumentSaveOperation) saveOperation ;
JSExportAs(contentsForTypeError,
-(id) jscontentsForType: (NSString *) typeName error: (JSValue *) outError );
JSExportAs(autosaveWithCompletionHandler,
-(void) jsautosaveWithCompletionHandler: (JSValue *) completionHandler );
-(void) finishedHandlingError: (NSError *) error recovered: (BOOL) recovered ;
JSExportAs(loadFromContentsOfTypeError,
-(BOOL) jsloadFromContents: (id) contents ofType: (NSString *) typeName error: (JSValue *) outError );
-(id) changeCountTokenForSaveOperation: (UIDocumentSaveOperation) saveOperation ;
JSExportAs(writeContentsAndAttributesSafelyToURLForSaveOperationError,
-(BOOL) jswriteContents: (id) contents andAttributes: (NSDictionary *) additionalFileAttributes safelyToURL: (NSURL *) url forSaveOperation: (UIDocumentSaveOperation) saveOperation error: (JSValue *) outError );
JSExportAs(openWithCompletionHandler,
-(void) jsopenWithCompletionHandler: (JSValue *) completionHandler );
@end
@protocol UIDocumentClassExports<JSExport, NSFilePresenterClassExports_, NSProgressReportingClassExports_>
@end
@protocol UIDocumentActivityContinuationCategoryInstanceExports<JSExport>
@property (nonatomic,strong) NSUserActivity * userActivity;
-(void) restoreUserActivityState: (NSUserActivity *) userActivity ;
-(void) updateUserActivityState: (NSUserActivity *) userActivity ;
@end
@protocol UIDocumentActivityContinuationCategoryClassExports<JSExport>
@end
#pragma clang diagnostic pop