#import <JavaScriptCore/JavaScriptCore.h>
#import "allheaders.h"
#import "allprotos.h"
#pragma clang diagnostic push
#pragma clang diagnostic ignored "-Wdeprecated-declarations"
#pragma clang diagnostic ignored "-Wobjc-property-no-attribute"
#pragma clang diagnostic ignored "-Wnullability-completeness"
void load_UIKit_UIPrinterPickerController_symbols(JSContext*);
@protocol UIPrinterPickerControllerInstanceExports<JSExport>
@property (nonatomic,weak) id delegate;
@property (readonly,nonatomic) UIPrinter * selectedPrinter;
JSExportAs(presentFromBarButtonItemAnimatedCompletionHandler,
-(BOOL) jspresentFromBarButtonItem: (UIBarButtonItem *) item animated: (BOOL) animated completionHandler: (JSValue *) completion );
-(void) dismissAnimated: (BOOL) animated ;
JSExportAs(presentAnimatedCompletionHandler,
-(BOOL) jspresentAnimated: (BOOL) animated completionHandler: (JSValue *) completion );
JSExportAs(presentFromRectInViewAnimatedCompletionHandler,
-(BOOL) jspresentFromRect: (CGRect) rect inView: (UIView *) view animated: (BOOL) animated completionHandler: (JSValue *) completion );
@end
@protocol UIPrinterPickerControllerClassExports<JSExport>
+(UIPrinterPickerController *) printerPickerControllerWithInitiallySelectedPrinter: (UIPrinter *) printer ;
@end
@protocol UIPrinterPickerControllerDelegateInstanceExports_<JSExport, NSObjectInstanceExports_>
-(void) printerPickerControllerWillDismiss: (UIPrinterPickerController *) printerPickerController ;
-(BOOL) printerPickerController: (UIPrinterPickerController *) printerPickerController shouldShowPrinter: (UIPrinter *) printer ;
-(void) printerPickerControllerWillPresent: (UIPrinterPickerController *) printerPickerController ;
-(void) printerPickerControllerDidSelectPrinter: (UIPrinterPickerController *) printerPickerController ;
-(void) printerPickerControllerDidPresent: (UIPrinterPickerController *) printerPickerController ;
-(void) printerPickerControllerDidDismiss: (UIPrinterPickerController *) printerPickerController ;
-(UIViewController *) printerPickerControllerParentViewController: (UIPrinterPickerController *) printerPickerController ;
@end
@protocol UIPrinterPickerControllerDelegateClassExports_<JSExport, NSObjectClassExports_>
@end
#pragma clang diagnostic pop