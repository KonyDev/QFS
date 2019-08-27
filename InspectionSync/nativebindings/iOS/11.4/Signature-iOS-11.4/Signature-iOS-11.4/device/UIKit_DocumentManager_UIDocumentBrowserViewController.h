#import <JavaScriptCore/JavaScriptCore.h>
#import "allheaders.h"
#import "allprotos.h"
#pragma clang diagnostic push
#pragma clang diagnostic ignored "-Wdeprecated-declarations"
#pragma clang diagnostic ignored "-Wobjc-property-no-attribute"
#pragma clang diagnostic ignored "-Wnullability-completeness"
void load_UIKit_DocumentManager_UIDocumentBrowserViewController_symbols(JSContext*);
@protocol UIDocumentBrowserViewControllerInstanceExports<JSExport, NSCodingInstanceExports_>
@property (assign,nonatomic) BOOL allowsDocumentCreation;
@property (nonatomic,strong) NSArray * customActions;
@property (assign,nonatomic) UIDocumentBrowserUserInterfaceStyle browserUserInterfaceStyle;
@property (nonatomic,strong) NSArray * additionalLeadingNavigationBarButtonItems;
@property (nonatomic,weak) id delegate;
@property (nonatomic,strong) NSArray * additionalTrailingNavigationBarButtonItems;
@property (readonly,copy,nonatomic) NSArray * allowedContentTypes;
@property (assign,nonatomic) BOOL allowsPickingMultipleItems;
JSExportAs(initForOpeningFilesWithContentTypes,
-(id) jsinitForOpeningFilesWithContentTypes: (NSArray *) allowedContentTypes );
JSExportAs(revealDocumentAtURLImportIfNeededCompletion,
-(void) jsrevealDocumentAtURL: (NSURL *) url importIfNeeded: (BOOL) importIfNeeded completion: (JSValue *) completion );
JSExportAs(importDocumentAtURLNextToDocumentAtURLModeCompletionHandler,
-(void) jsimportDocumentAtURL: (NSURL *) documentURL nextToDocumentAtURL: (NSURL *) neighbourURL mode: (UIDocumentBrowserImportMode) importMode completionHandler: (JSValue *) completion );
-(UIDocumentBrowserTransitionController *) transitionControllerForDocumentURL: (NSURL *) documentURL ;
@end
@protocol UIDocumentBrowserViewControllerClassExports<JSExport, NSCodingClassExports_>
@end
@protocol UIDocumentBrowserTransitionControllerInstanceExports<JSExport, UIViewControllerAnimatedTransitioningInstanceExports_>
@property (nonatomic,strong) NSProgress * loadingProgress;
@property (nonatomic,weak) UIView * targetView;
@end
@protocol UIDocumentBrowserTransitionControllerClassExports<JSExport, UIViewControllerAnimatedTransitioningClassExports_>
@end
@protocol UIDocumentBrowserViewControllerDelegateInstanceExports_<JSExport, NSObjectInstanceExports_>
-(void) documentBrowser: (UIDocumentBrowserViewController *) controller didPickDocumentURLs: (NSArray *) documentURLs ;
JSExportAs(documentBrowserDidRequestDocumentCreationWithHandler,
-(void) jsdocumentBrowser: (UIDocumentBrowserViewController *) controller didRequestDocumentCreationWithHandler: (JSValue *) importHandler );
-(void) documentBrowser: (UIDocumentBrowserViewController *) controller failedToImportDocumentAtURL: (NSURL *) documentURL error: (NSError *) error ;
-(void) documentBrowser: (UIDocumentBrowserViewController *) controller didImportDocumentAtURL: (NSURL *) sourceURL toDestinationURL: (NSURL *) destinationURL ;
-(NSArray *) documentBrowser: (UIDocumentBrowserViewController *) controller applicationActivitiesForDocumentURLs: (NSArray *) documentURLs ;
-(void) documentBrowser: (UIDocumentBrowserViewController *) controller willPresentActivityViewController: (UIActivityViewController *) activityViewController ;
@end
@protocol UIDocumentBrowserViewControllerDelegateClassExports_<JSExport, NSObjectClassExports_>
@end
#pragma clang diagnostic pop