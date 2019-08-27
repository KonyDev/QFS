#import <JavaScriptCore/JavaScriptCore.h>
#import "allheaders.h"
#import "allprotos.h"
#pragma clang diagnostic push
#pragma clang diagnostic ignored "-Wdeprecated-declarations"
#pragma clang diagnostic ignored "-Wobjc-property-no-attribute"
#pragma clang diagnostic ignored "-Wnullability-completeness"
void load_UIKit_UIDocumentInteractionController_symbols(JSContext*);
@protocol UIDocumentInteractionControllerInstanceExports<JSExport, UIActionSheetDelegateInstanceExports_>
@property (readonly,nonatomic) NSArray * gestureRecognizers;
@property (copy) NSString * name;
@property (readonly,nonatomic) NSArray * icons;
@property (strong) NSURL * URL;
@property (copy,nonatomic) NSString * UTI;
@property (nonatomic,weak) id delegate;
@property (nonatomic,strong) id annotation;
-(void) dismissPreviewAnimated: (BOOL) animated ;
-(BOOL) presentOpenInMenuFromRect: (CGRect) rect inView: (UIView *) view animated: (BOOL) animated ;
-(void) dismissMenuAnimated: (BOOL) animated ;
-(BOOL) presentOptionsMenuFromRect: (CGRect) rect inView: (UIView *) view animated: (BOOL) animated ;
-(BOOL) presentOptionsMenuFromBarButtonItem: (UIBarButtonItem *) item animated: (BOOL) animated ;
-(BOOL) presentOpenInMenuFromBarButtonItem: (UIBarButtonItem *) item animated: (BOOL) animated ;
-(BOOL) presentPreviewAnimated: (BOOL) animated ;
@end
@protocol UIDocumentInteractionControllerClassExports<JSExport, UIActionSheetDelegateClassExports_>
+(UIDocumentInteractionController *) interactionControllerWithURL: (NSURL *) url ;
@end
@protocol UIDocumentInteractionControllerDelegateInstanceExports_<JSExport, NSObjectInstanceExports_>
-(UIView *) documentInteractionControllerViewForPreview: (UIDocumentInteractionController *) controller ;
JSExportAs(documentInteractionControllerCanPerformAction,
-(BOOL) jsdocumentInteractionController: (UIDocumentInteractionController *) controller canPerformAction: (NSString *) action );
-(void) documentInteractionControllerDidDismissOptionsMenu: (UIDocumentInteractionController *) controller ;
-(void) documentInteractionControllerWillPresentOpenInMenu: (UIDocumentInteractionController *) controller ;
JSExportAs(documentInteractionControllerPerformAction,
-(BOOL) jsdocumentInteractionController: (UIDocumentInteractionController *) controller performAction: (NSString *) action );
-(void) documentInteractionController: (UIDocumentInteractionController *) controller didEndSendingToApplication: (NSString *) application ;
-(void) documentInteractionController: (UIDocumentInteractionController *) controller willBeginSendingToApplication: (NSString *) application ;
-(void) documentInteractionControllerWillBeginPreview: (UIDocumentInteractionController *) controller ;
-(void) documentInteractionControllerWillPresentOptionsMenu: (UIDocumentInteractionController *) controller ;
-(CGRect) documentInteractionControllerRectForPreview: (UIDocumentInteractionController *) controller ;
-(UIViewController *) documentInteractionControllerViewControllerForPreview: (UIDocumentInteractionController *) controller ;
-(void) documentInteractionControllerDidDismissOpenInMenu: (UIDocumentInteractionController *) controller ;
-(void) documentInteractionControllerDidEndPreview: (UIDocumentInteractionController *) controller ;
@end
@protocol UIDocumentInteractionControllerDelegateClassExports_<JSExport, NSObjectClassExports_>
@end
#pragma clang diagnostic pop