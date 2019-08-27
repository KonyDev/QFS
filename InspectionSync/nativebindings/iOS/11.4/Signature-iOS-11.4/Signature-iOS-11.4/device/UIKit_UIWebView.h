#import <JavaScriptCore/JavaScriptCore.h>
#import "allheaders.h"
#import "allprotos.h"
#pragma clang diagnostic push
#pragma clang diagnostic ignored "-Wdeprecated-declarations"
#pragma clang diagnostic ignored "-Wobjc-property-no-attribute"
#pragma clang diagnostic ignored "-Wnullability-completeness"
void load_UIKit_UIWebView_symbols(JSContext*);
@protocol UIWebViewInstanceExports<JSExport, NSCodingInstanceExports_, UIScrollViewDelegateInstanceExports_>
@property (getter=canGoBack,readonly,nonatomic) BOOL canGoBack;
@property (nonatomic) UIWebPaginationBreakingMode paginationBreakingMode;
@property (getter=isLoading,readonly,nonatomic) BOOL loading;
@property (nonatomic) CGFloat gapBetweenPages;
@property (nonatomic) BOOL allowsInlineMediaPlayback;
@property (nonatomic) BOOL allowsLinkPreview;
@property (nonatomic) BOOL mediaPlaybackRequiresUserAction;
@property (nonatomic) UIDataDetectorTypes dataDetectorTypes;
@property (nonatomic) UIWebPaginationMode paginationMode;
@property (readonly,nonatomic,strong) NSURLRequest * request;
@property (nonatomic) CGFloat pageLength;
@property (readonly,nonatomic,strong) UIScrollView * scrollView;
@property (nonatomic) BOOL scalesPageToFit;
@property (readonly,nonatomic) NSUInteger pageCount;
@property (nonatomic) BOOL detectsPhoneNumbers;
@property (getter=canGoForward,readonly,nonatomic) BOOL canGoForward;
@property (assign,nonatomic) id delegate;
@property (nonatomic) BOOL suppressesIncrementalRendering;
@property (nonatomic) BOOL keyboardDisplayRequiresUserAction;
@property (nonatomic) BOOL mediaPlaybackAllowsAirPlay;
@property (nonatomic) BOOL allowsPictureInPictureMediaPlayback;
-(void) loadRequest: (NSURLRequest *) request ;
-(void) loadHTMLString: (NSString *) string baseURL: (NSURL *) baseURL ;
-(void) goForward;
-(void) goBack;
-(void) loadData: (NSData *) data MIMEType: (NSString *) MIMEType textEncodingName: (NSString *) textEncodingName baseURL: (NSURL *) baseURL ;
-(void) stopLoading;
-(NSString *) stringByEvaluatingJavaScriptFromString: (NSString *) script ;
-(void) reload;
@end
@protocol UIWebViewClassExports<JSExport, NSCodingClassExports_, UIScrollViewDelegateClassExports_>
@end
@protocol UIWebViewDelegateInstanceExports_<JSExport, NSObjectInstanceExports_>
-(void) webViewDidStartLoad: (UIWebView *) webView ;
-(BOOL) webView: (UIWebView *) webView shouldStartLoadWithRequest: (NSURLRequest *) request navigationType: (UIWebViewNavigationType) navigationType ;
-(void) webViewDidFinishLoad: (UIWebView *) webView ;
-(void) webView: (UIWebView *) webView didFailLoadWithError: (NSError *) error ;
@end
@protocol UIWebViewDelegateClassExports_<JSExport, NSObjectClassExports_>
@end
#pragma clang diagnostic pop