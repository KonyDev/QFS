#import <JavaScriptCore/JavaScriptCore.h>
#import "allheaders.h"
#import "allprotos.h"
#pragma clang diagnostic push
#pragma clang diagnostic ignored "-Wdeprecated-declarations"
#pragma clang diagnostic ignored "-Wobjc-property-no-attribute"
#pragma clang diagnostic ignored "-Wnullability-completeness"
void load_UIKit_UIPrintInteractionController_symbols(JSContext*);
@protocol UIPrintInteractionControllerInstanceExports<JSExport>
@property (copy,nonatomic) NSArray * printingItems;
@property (nonatomic,strong) UIPrintInfo * printInfo;
@property (copy,nonatomic) id printingItem;
@property (nonatomic,strong) UIPrintPageRenderer * printPageRenderer;
@property (nonatomic) BOOL showsNumberOfCopies;
@property (nonatomic) BOOL showsPaperSelectionForLoadedPapers;
@property (nonatomic,weak) id delegate;
@property (nonatomic,strong) UIPrintFormatter * printFormatter;
@property (nonatomic) BOOL showsPageRange;
@property (readonly,nonatomic) UIPrintPaper * printPaper;
JSExportAs(presentFromBarButtonItemAnimatedCompletionHandler,
-(BOOL) jspresentFromBarButtonItem: (UIBarButtonItem *) item animated: (BOOL) animated completionHandler: (JSValue *) completion );
JSExportAs(printToPrinterCompletionHandler,
-(BOOL) jsprintToPrinter: (UIPrinter *) printer completionHandler: (JSValue *) completion );
-(void) dismissAnimated: (BOOL) animated ;
JSExportAs(presentAnimatedCompletionHandler,
-(BOOL) jspresentAnimated: (BOOL) animated completionHandler: (JSValue *) completion );
JSExportAs(presentFromRectInViewAnimatedCompletionHandler,
-(BOOL) jspresentFromRect: (CGRect) rect inView: (UIView *) view animated: (BOOL) animated completionHandler: (JSValue *) completion );
@end
@protocol UIPrintInteractionControllerClassExports<JSExport>
+(BOOL) canPrintURL: (NSURL *) url ;
+(BOOL) canPrintData: (NSData *) data ;
+(NSSet *) printableUTIs;
+(UIPrintInteractionController *) sharedPrintController;
+(BOOL) isPrintingAvailable;
@end
@protocol UIPrintInteractionControllerDelegateInstanceExports_<JSExport, NSObjectInstanceExports_>
-(CGFloat) printInteractionController: (UIPrintInteractionController *) printInteractionController cutLengthForPaper: (UIPrintPaper *) paper ;
-(UIViewController *) printInteractionControllerParentViewController: (UIPrintInteractionController *) printInteractionController ;
-(void) printInteractionControllerDidPresentPrinterOptions: (UIPrintInteractionController *) printInteractionController ;
-(UIPrintPaper *) printInteractionController: (UIPrintInteractionController *) printInteractionController choosePaper: (NSArray *) paperList ;
-(UIPrinterCutterBehavior) printInteractionController: (UIPrintInteractionController *) printInteractionController chooseCutterBehavior: (NSArray *) availableBehaviors ;
-(void) printInteractionControllerDidFinishJob: (UIPrintInteractionController *) printInteractionController ;
-(void) printInteractionControllerWillStartJob: (UIPrintInteractionController *) printInteractionController ;
-(void) printInteractionControllerWillPresentPrinterOptions: (UIPrintInteractionController *) printInteractionController ;
-(void) printInteractionControllerDidDismissPrinterOptions: (UIPrintInteractionController *) printInteractionController ;
-(void) printInteractionControllerWillDismissPrinterOptions: (UIPrintInteractionController *) printInteractionController ;
@end
@protocol UIPrintInteractionControllerDelegateClassExports_<JSExport, NSObjectClassExports_>
@end
#pragma clang diagnostic pop